import authReducer  from './authReducer.js'
import { combineReducers } from 'redux';

const reducers = combineReducers({
    auth: authReducer
});

export default reducers;