import { POST_LOCATION, LOCATIONS_LOADING } from '../actions/types';

const initialState = {
    location: {},
    earthquakes: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_LOCATION:
            return {
                ...state,
                earthquakes: action.payload.earthquakes,
                location: action.payload.location,
                loading: false
            };
        case LOCATIONS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}