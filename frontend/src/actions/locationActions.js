import axios from 'axios';
import { POST_LOCATION } from './types';

export const postLocation = action => (dispatch, getState) => {
    axios
    .post('/api/actions', action)
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
/*
export const setActionsLoading = () => {
    return {
        type: ACTIONS_LOADING
    }
}*/