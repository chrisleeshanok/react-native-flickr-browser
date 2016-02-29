import { ADD_PHOTOS } from '../constants/actionTypes';

const initialState = {
    page: 0,
    photos: [],
    perpage: 0,
    total: 0
};

export default function photos(state = initialState, action) {
    switch (action.type) {
        case ADD_PHOTOS:
            return {
                ...state,
                photos: state.photos.concat(action.photos.photo),
                page: action.photos.page,
                perpage: action.photos.perpage,
                total: action.photos.total
            };
        default:
            return state;
    }
};
