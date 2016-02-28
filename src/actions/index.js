import * as types from '../constants/actionTypes';

export function() addPhotos(photos) {
    return { type: types.ADD_PHOTOS, photos };
}
