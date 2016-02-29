'use strict';
import React, {
  Component,
  Image,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import styles from '../styles/styles';

export default class PhotoThumb extends Component {

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
                width: Dimensions.get('window').width/2,
                height: Dimensions.get('window').width/2
            }
        }
    }

    _onTouchHandler() {
        const { viewPhoto } = this.props;
        viewPhoto(this.props.photoData);
    }

    render() {
         let photoUri = (this.props.photoData.url_s ||
         'https://farm' + this.props.photoData.farm + '.staticflickr.com/' + this.props.photoData.server + '/' + this.props.photoData.id + '_' + this.props.photoData.secret + '.jpg');

         return (
             <View style={[styles.photo_thumb_wrapper, this.calculateThumbSize()]}>
                <TouchableHighlight onPress={this._onTouchHandler.bind(this)}>
                    <Image style={[styles.photo_thumb, this.calculateThumbSize()]} key={this.props.photoData.id} source={{uri: photoUri}} />
                </TouchableHighlight>
             </View>
         );
    }
}
