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

import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

import Photo from '../components/Photo';
import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from '../styles/styles';

import FlickrApiService from '../services/FlickrApiService';

const store = configureStore();

export default class FlickrReactNative extends Component {

	constructor(props) {
		super(props);

        //We want the light style status bar
        StatusBarIOS.setStyle('light-content');

        //Required Datasource for the listview
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
        if (!this.state.asyncLoad) {
            this.setState({asyncLoad: true}, () => {
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
            });
        }
    }

    _renderRow(photo) {
        return (
            <Photo photoData={photo}></Photo>
        );
    }

    _renderFooter() {
        if (this.state.asyncLoad) {
            return (<Footer/>);
        }
    }

	render() {
        let width = {width: Dimensions.get('window').width};
		return (
            <Provider store={store}>
            <View style={styles.scroll_container}>
                <Header title={this.state.title} />
                <View style={styles.photo_grid_wrapper}>
                    <ListView contentContainerStyle={styles.photo_grid}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        renderFooter={this._renderFooter.bind(this)}
                        onEndReachedThreshold={200}
                        onEndReached={this.fetchNextPage.bind(this)}
                        pageSize={20}>
        			</ListView>
                </View>
            </View>
            </Provider>
		);
	}
}
