import { GET_EARTHQUAKES, EARTHQUAKES_LOADING } from '../actions/types';

const initialState = {
    earthquakes: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EARTHQUAKES:
            return {
                ...state,
                earthquakes: action.payload.earthquakes,
                loading: false
            };
        case EARTHQUAKES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}