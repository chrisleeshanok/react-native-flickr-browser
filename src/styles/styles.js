'use strict';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  scroll_container: {
      flex: 1,
      backgroundColor: '#000000'
  },
  photo_grid: {
    // flexDirection: 'row',
    // backgroundColor: '#F5FCFF',
    // flexWrap: 'wrap'
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
  search_input: {
      color: '#ffffff',
      backgroundColor: '#000000'
  },
  photo_thumb: {

  }
});
