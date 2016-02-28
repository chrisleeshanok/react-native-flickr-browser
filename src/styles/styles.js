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
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  grid_footer_text: {
    fontSize: 20,
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
});
