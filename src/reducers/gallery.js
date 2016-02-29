import {
    IS_FETCHING,
    DONE_FETCHING,
    VIEW_PHOTO,
    CLOSE_PHOTO,
    SET_SCROLL_OFFSET_Y
} from '../constants/actionTypes';

const initialState = {
    title: 'snaps',
    hasLoaded: false,
    isFetching: false,
    viewPhoto: undefined,
    scrollOffsetY: 0
};

export default function gallery(state = initialState, action) {
    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        case DONE_FETCHING:
            return {
                ...state,
                isFetching: false,
                hasLoaded: true
            };
        case VIEW_PHOTO:
            return {
                ...state,
                viewPhoto: action.photo
            };
        case CLOSE_PHOTO:
            return {
                ...state,
                viewPhoto: undefined
            };
        case SET_SCROLL_OFFSET_Y:
            return {
                ...state,
                scrollOffsetY: action.offset
            };
        default:
            return state;
    }
};
