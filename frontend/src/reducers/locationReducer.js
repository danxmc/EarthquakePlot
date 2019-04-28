import { POST_LOCATION } from '../actions/types';

const initialState = {
    location: "",
    earthquake: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_LOCATION:
            return {
                ...state,
                location: [action.payload, ...state.actions]
            };
        /*case LOCATIONS_LOADING:
            return {
                ...state,
                loading: true
            }*/
        default:
            return state;
    }
}