import * as types from '../constants/actionTypes';

//App related
export function isFetching() {
    return { type: types.IS_FETCHING };
}

export function doneFetching() {
    return { type: types.DONE_FETCHING };
}

//Photo related
export function addPhotos(photos) {
    return { type: types.ADD_PHOTOS, photos };
}
