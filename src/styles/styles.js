'use strict';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  scroll_container: {
      flex: 1,
      backgroundColor: '#000000'
  },
  photo_grid_wrapper: {
    flex: 10
  },
  grid_header: {
    backgroundColor: '#000000',
    height: 60,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  grid_header_text: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    margin: 10
  },
  grid_footer: {
    backgroundColor: '#000000',
    height: 60,
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  grid_footer_text: {
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'center',
    margin: 10
  },
  photo_grid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  photo_thumb_wrapper: {

  },
  photo_thumb: {
      flex: 1
  },
  search_input: {
      color: '#ffffff',
      backgroundColor: '#000000'
  },
  photoOverlay: {
      backgroundColor: '#000000',
      width: Dimensions.get('window').width,
      padding: 20,
      height: (Dimensions.get('window').height/2.7),
      marginTop: (Dimensions.get('window').height/2.7)*(-1),
  },
  photoOverlayTitle: {
      color: '#ffffff',
      fontSize: 22
  },
  photoOverlayArtist: {
      marginTop: 7,
      color: '#ffffff',
      fontSize: 12
  },
  photoOverlayDescription: {
      marginTop: 10,
      color: '#ffffff',
      fontSize: 14
  },
  closePhoto: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#000000',
      marginTop: (Dimensions.get('window').height * (-1)) + 30,
      marginLeft: (Dimensions.get('window').width/2) - 20,
      opacity: 0.4
  },
  closePhotoText: {
      padding: 8,
      paddingLeft: 13,
      fontSize: 20,
      color: '#ffffff'
  }

});
