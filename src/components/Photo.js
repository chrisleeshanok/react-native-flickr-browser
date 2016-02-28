'use strict';
import React, {
  Component,
  Image,
  View,
  Dimensions
} from 'react-native';

import styles from '../styles/styles';

export default class Photo extends Component {

    constructor(props) {
        super(props);
    }

    calculateThumbSize() {
        if (Dimensions.get('window').width > Dimensions.get('window').height) {
            //Landscape
            return {
                width: Dimensions.get('window').width/4,
                height: Dimensions.get('window').height/2
            }
        } else {
            //Portrait
            return {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height/2
            }
        }
    }

    render() {
         let photoUri = 'https://farm' + this.props.photoData.farm + '.staticflickr.com/' + this.props.photoData.server + '/' + this.props.photoData.id + '_' + this.props.photoData.secret + '.jpg';
         return (
             <View>
                <Image style={[styles.photo_thumb, this.calculateThumbSize()]} key={this.props.photoData.id} source={{uri: photoUri}} />
             </View>
         );
    }
}
