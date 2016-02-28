import { ADD_PHOTOS } from '../constants/actionTypes';

const initialState = [
    {
        photos: []
    }
];

export default function photos(state = initialState, action) {
    switch (action.type) {
        case ADD_PHOTOS:
            return [
                {
                    photos: state.photos.concat(action.photos)
                }
            ];
        case default:
            return state;
    }
};
