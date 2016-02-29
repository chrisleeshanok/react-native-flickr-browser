'use strict';
import React, {
  Component,
  Image,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Dimensions,
  Text
} from 'react-native';

import styles from '../styles/styles';

export default class PhotoView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMetadata: true
        };
    }

    _calculatePhotoSize() {

        //First calculate the photo Dimensions
        let aspect_ratio = this.props.photoData.width_l/this.props.photoData.height_l;

        if (aspect_ratio > 1) {
            return {
                width: Dimensions.get('window').width*aspect_ratio,
                height: Dimensions.get('window').height
            };
        } else {
            return {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height*aspect_ratio
            };
        }
    }

    _toggleMetadata() {
        this.setState({
            showMetadata: !this.state.showMetadata
        });
    }

    _closePhoto() {
        const { closePhoto } = this.props;
        closePhoto();
    }

    render() {
         let photoUri = (this.props.photoData.url_l);
         let horizontal = (this.props.photoData.width_l/this.props.photoData.height_l > 1) ? true : false;
         let opacity = (this.state.showMetadata) ? {opacity: 0.65} : {opacity: 0};
         return (
             <View>
                <ScrollView style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}} horizontal={horizontal}>
                    <TouchableWithoutFeedback onPress={this._toggleMetadata.bind(this)}>
                        <Image style={[styles.photo_thumb, this._calculatePhotoSize()]} key={this.props.photoData.id} source={{uri: photoUri}} />
                    </TouchableWithoutFeedback>
                </ScrollView>
                <View style={[styles.photoOverlay, opacity]}>
                    <ScrollView>
                        <Text style={styles.photoOverlayTitle}>{this.props.photoData.title}</Text>
                        <Text style={styles.photoOverlayArtist}>{'by: ' + this.props.photoData.ownername}</Text>
                        <Text style={styles.photoOverlayDescription}>{this.props.photoData.description._content}</Text>
                    </ScrollView>
                </View>
                <TouchableHighlight onPress={this._closePhoto.bind(this)}>
                    <Image style={styles.closePhoto}>
                        <Text style={styles.closePhotoText}>{'X'}</Text>
                    </Image>
                </TouchableHighlight>
             </View>
         );
    }
}
