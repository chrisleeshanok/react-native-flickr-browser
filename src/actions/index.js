import * as types from '../constants/actionTypes';

//App related
export function isFetching() {
    return { type: types.IS_FETCHING };
}

export function doneFetching() {
    return { type: types.DONE_FETCHING };
}

export function viewPhoto(photo) {
    return { type: types.VIEW_PHOTO, photo };
}

export function closePhoto(photo) {
    return { type: types.CLOSE_PHOTO, photo };
}


//Photo related
export function addPhotos(photos) {
    return { type: types.ADD_PHOTOS, photos };
}
