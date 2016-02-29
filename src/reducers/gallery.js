import { IS_FETCHING, DONE_FETCHING } from '../constants/actionTypes';

const initialState = {
    title: 'snaps',
    hasLoaded: false,
    isFetching: false
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
        default:
            return state;
    }
};
