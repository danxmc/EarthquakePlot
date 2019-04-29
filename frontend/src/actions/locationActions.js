import axios from 'axios';
import { POST_LOCATION, LOCATIONS_LOADING } from './types';

export const postLocation = action => (dispatch) => {
    dispatch(setLocationsLoading());
    axios
    .post('/api/locations', action)
    .then(res => {
        dispatch({
            type: POST_LOCATION,
            payload: res.data
        })
    }).catch(err => {
        console.error(err);
        /*dispatch(
            returnErrors(err.response.data, err.response.status)
        );*/
    });
}

export const setLocationsLoading = () => {
    return {
        type: LOCATIONS_LOADING
    }
}