'use strict';
import React, {
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
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

import styles from '../styles/styles';

import FlickrApiService from '../services/FlickrApiService';

export default class Gallery extends Component {

	constructor(props) {
		super(props);

        //Required Datasource for the listview
        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

		this.state = {
            dataSource: dataSource
		};
	}

	componentDidMount() {
		if (!this.props.gallery.hasLoaded) {

            const { addPhotos, doneFetching } = this.props;

			FlickrApiService.getPhotosBySearch(null)
			.then((photos) => {
                addPhotos(photos);
                doneFetching();
			})
			.catch((error) => {
				console.warn(error);
				//TODO: do some error stuff
			});
		}
	}

    fetchNextPage() {
        if (!this.props.gallery.isFetching) {
            const { isFetching, addPhotos, doneFetching } = this.props;
            isFetching();

			FlickrApiService.getPhotosBySearch(null, this.props.photos.page + 1)
			.then((photos) => {
                addPhotos(photos);
                doneFetching();
			})
			.catch((error) => {
				console.warn(error);
				//TODO: do some error stuff
			});
		}
    }

    _renderRow(photo) {
        return (
            <Photo photoData={photo}></Photo>
        );
    }

    _renderFooter() {
        if (this.props.gallery.isFetching) {
            return (<Footer/>);
        }
    }

    _getDataSource() {
        return this.state.dataSource.cloneWithRows(this.props.photos.photos);
    }

	render() {

        if (!this.props.gallery.hasLoaded) {
            return (
                <View style={styles.scroll_container}>
                    <Header title={this.props.gallery.title} />
                    <View style={styles.photo_grid_wrapper}>
                        <Loading />
                    </View>
                </View>
            );
        }

        let width = {width: Dimensions.get('window').width};
		return (
            <View style={styles.scroll_container}>
                <Header title={this.props.gallery.title} />
                <View style={styles.photo_grid_wrapper}>
                    <ListView contentContainerStyle={styles.photo_grid}
                        dataSource={this._getDataSource()}
                        renderRow={this._renderRow}
                        renderFooter={this._renderFooter.bind(this)}
                        onEndReachedThreshold={40}
                        onEndReached={this.fetchNextPage.bind(this)}
                        pageSize={20}>
        			</ListView>
                </View>
            </View>
		);
	}
}
