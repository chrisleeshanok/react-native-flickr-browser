'use strict';
import React, {
  Component,
  View,
  Text,
  Dimensions
} from 'react-native';

import styles from '../styles/styles';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    _getWidthStyle() {
        return {width: Dimensions.get('window').width};
    }

    render() {
        return (
            <View style={[styles.grid_header, this._getWidthStyle()]}>
                <Text style={styles.grid_header_text}>{this.props.title}</Text>
            </View>
        );
    }
};
