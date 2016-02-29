'use strict';
import React, {
  Component
} from 'react-native';

import GalleryApp from './GalleryApp';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

export default class App extends Component {

	constructor(props) {
		super(props);
    }

	render() {
		return (
            <Provider store={store}>
                <GalleryApp />
            </Provider>
		);
	}
}
