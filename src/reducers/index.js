'use strict';
import { combineReducers } from 'redux';
import photoReducer from './photos';

export default combineReducers({
    photos: photoReducer
});
