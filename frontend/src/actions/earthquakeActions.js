import axios from 'axios';
import { GET_EARTHQUAKES } from './types';

export const getEarthquakes = () => dispatch => {
    //dispatch(setActionsLoading());
    axios
    .get('/api/earthquakes')
    .then(res => {
        dispatch({
            type: GET_EARTHQUAKES,
            payload: res.data.earthquakes
        })
    }).catch(err => {
        console.error(err);
        /*dispatch(
            returnErrors(err.response.data, err.response.status)
        );*/
    });
}