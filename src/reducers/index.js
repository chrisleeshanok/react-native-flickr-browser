'use strict';
import { combineReducers } from 'redux';
import photoReducer from './photos';
import galleryReducer from './gallery';

export default combineReducers({
    photos: photoReducer,
    gallery: galleryReducer
});
