'use strict';
import React, {
  Component,
  Image,
  View,
  Dimensions
} from 'react-native';

import styles from '../styles/styles';

export default class PhotoGrid extends Component {

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
                height: Dimensions.get('window').height/4
            }
        }
    }

    render() {
        return (<View style={styles.photo_grid}>
            {this.props.photos.map((photo)=> {
               let photoUri = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
               return (
                   <Image style={[styles.photo_thumb, this.calculateThumbSize()]}
                      key={photo.id}
                      source={{uri: photoUri}}
                   />
               );
            })}
        </View>);
    }
}
