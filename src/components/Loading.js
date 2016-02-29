'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>
          {'Fetching photos..'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#cccccc'
  }
});
