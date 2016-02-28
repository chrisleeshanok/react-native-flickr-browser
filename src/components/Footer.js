'use strict';
import React, {
  Component,
  View,
  Text,
  Dimensions
} from 'react-native';

import styles from '../styles/styles';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    _getWidthStyle() {
        return {width: Dimensions.get('window').width};
    }

    render() {
        return (
            <View style={[styles.grid_footer, this._getWidthStyle()]}>
                <Text style={styles.grid_footer_text}>...</Text>
            </View>
        );
    }
};
