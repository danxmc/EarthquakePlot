import { GET_EARTHQUAKES } from '../actions/types';

const initialState = {
    earthquakes: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EARTHQUAKES:
            return {
                ...state,
                earthquakes: action.payload,
                loading: false
            };
        default:
            return state;
    }
}