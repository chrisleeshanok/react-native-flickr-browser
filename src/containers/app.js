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
  View
} from 'react-native';

import Photo from '../components/Photo';
import styles from '../styles/styles';
import FlickrApiService from '../services/FlickrApiService';

export default class FlickrReactNative extends Component {

	constructor(props) {
		super(props);
        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
		this.state = {
			welcomeMessage: 'Welcome!',
			page: 0,
			pages: 0,
			perpage: 0,
			total: 0,
			photos: [],
            dataSource: dataSource,
			hasLoaded: false
		};
	}

	componentDidMount() {
		if (!this.state.hasLoaded) {
			FlickrApiService.getInterestingPhotos()
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

    renderRow(photo) {
        return (
            <Photo photoData={photo}></Photo>
        );
    }

    renderHeader() {
        let width = {width: Dimensions.get('window').width}
        return (
            <View style={[styles.grid_header, width]}>
                <Text style={styles.grid_header_text}>Flickr Photos</Text>
                {/*<TextInput
                    style={styles.search_input}
                    value={'Search'}
                  />*/}
            </View>
        );
    }

	render() {
        let width = {width: Dimensions.get('window').width};
		return (
            <View style={styles.scroll_container}>
                {this.renderHeader()}
                <ListView style={styles.photo_grid}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}>
    			</ListView>
            </View>

		);
	}
}
