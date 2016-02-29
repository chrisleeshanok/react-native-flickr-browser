'use strict';
import React, {
  Component,
  StatusBarIOS,
  NavigatorIOS
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as galleryActions from '../actions';

import Gallery from '../components/Gallery';


class GalleryApp extends Component {

	constructor(props) {
		super(props);

        //We want the light style status bar
        StatusBarIOS.setStyle('light-content');
    }

	render() {
        const {state, actions} = this.props;
		return (
            <Gallery {...state} {...actions} />
		);
	}
}

export default connect(
    (state) => (
        {
            state: {
                photos: state.photos,
                gallery: state.gallery
            }
        }
    ),
    (dispatch) => (
        {
            actions: bindActionCreators(galleryActions, dispatch)
        }
    )
)(GalleryApp);
