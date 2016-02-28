'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  Text,
  TextInput,
  Image,
  ScrollView,
  ListView,
  View,
  StatusBarIOS
} from 'react-native';

import Photo from '../components/Photo';
import styles from '../styles/styles';
import FlickrApiService from '../services/FlickrApiService';

export default class FlickrReactNative extends Component {

	constructor(props) {
		super(props);

        StatusBarIOS.setStyle('light-content')

        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
		this.state = {
			title: 'snap of the day',
			page: 0,
			pages: 0,
			perpage: 0,
			total: 0,
			photos: [],
            dataSource: dataSource,
			hasLoaded: false,
            asyncLoad: false
		};
	}

	componentDidMount() {
		if (!this.state.hasLoaded) {
			FlickrApiService.getPhotosBySearch()
			.then((photos) => {
				this.setState({
				photos: photos.photo,
				page: photos.page,
				pages: photos.pages,
				perpage: photos.perpage,
				total: photos.total,
                dataSource: this.state.dataSource.cloneWithRows(photos.photo),
				hasLoaded: true
				});
			})
			.catch((error) => {
				console.warn(error);
				//TODO: do some error stuff
			});
		}
	}

    fetchNextPage() {
        this.setState({asyncLoad: true});

		FlickrApiService.getPhotosBySearch(this.state.page + 1)
		.then((photos) => {
            let newPhotos = this.state.photos.concat(photos.photo);
			this.setState({
    			photos: newPhotos,
    			page: photos.page,
    			pages: photos.pages,
    			perpage: photos.perpage,
    			total: photos.total,
                dataSource: this.state.dataSource.cloneWithRows(newPhotos),
    			hasLoaded: true,
                asyncLoad: false
			});
		})
		.catch((error) => {
			console.warn(error);
			//TODO: do some error stuff
		});
    }

    renderRow(photo) {
        return (
            <Photo photoData={photo}></Photo>
        );
    }

    renderHeader() {
        let width = {width: Dimensions.get('window').width}
        return (
            <View style={[styles.grid_header, width]}>
                <Text style={styles.grid_header_text}>{this.state.title}</Text>
                {/*<TextInput
                    style={styles.search_input}
                    value={'Search'}
                  />*/}
            </View>
        );
    }

    renderFooter() {
        let width = {width: Dimensions.get('window').width}
        if (this.state.asyncLoad) {
            return (
                <View style={[styles.grid_footer, width]}>
                    <Text style={styles.grid_footer_text}>...</Text>
                </View>
            );
        }
    }

	render() {
        let width = {width: Dimensions.get('window').width};
		return (
            <View style={styles.scroll_container}>
                {this.renderHeader()}
                <View style={styles.photo_grid_wrapper}>
                    <ListView contentContainerStyle={styles.photo_grid}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        renderFooter={this.renderFooter.bind(this)}
                        onEndReachedThreshold={200}
                        onEndReached={this.fetchNextPage.bind(this)}
                        pageSize={20}>
        			</ListView>
                </View>
            </View>

		);
	}
}
