'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  Image,
  ScrollView,
  View,
} from 'react-native';

import PhotoGrid from '../components/PhotoGrid';
import styles from '../styles/styles';
import FlickrApiService from '../services/FlickrApiService';

export default class FlickrReactNative extends Component {

  constructor(props) {
      super(props);
      this.state = {
          welcomeMessage: 'Welcome!',
          page: 0,
          pages: 0,
          perpage: 0,
          total: 0,
          photos: [],
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
                  hasLoaded: true
              });
          })
          .catch((error) => {
              console.warn(error);
              //TODO: do some error stuff
          });
      }
  }

  render() {
    return (
    <ScrollView style={styles.scroll_container}>
		<PhotoGrid photos={this.state.photos}/>
      </ScrollView>
    );
  }
}
