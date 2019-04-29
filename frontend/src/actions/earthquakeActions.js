import axios from 'axios';
import { GET_EARTHQUAKES, EARTHQUAKES_LOADING } from './types';

export const getEarthquakes = () => dispatch => {
    dispatch(setEarthquakesLoading());
    axios
    .get('/api/earthquakes')
    .then(res => {
        dispatch({
            type: GET_EARTHQUAKES,
            payload: res.data
        })
    }).catch(err => {
        console.error(err);
        /*dispatch(
            returnErrors(err.response.data, err.response.status)
        );*/
    });
}

export const setEarthquakesLoading = () => {
    return {
        type: EARTHQUAKES_LOADING
    }
}