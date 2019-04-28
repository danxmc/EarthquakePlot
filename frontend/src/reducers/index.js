import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import earthquakeReducer from './earthquakeReducer';

export default combineReducers({
    location: locationReducer,
    earthquake: earthquakeReducer
})