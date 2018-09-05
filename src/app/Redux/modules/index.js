import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appConfig from './appConfig';
import loading from './loading';
import chat from './chat';
import params from './params';
import research from './research';
import user from './user';

let combinedObj = {
    appConfig,
    loading,
    chat,
    params,
    research,
    routing: routerReducer,
    user
};

const rootReducer = combineReducers(combinedObj);

export default rootReducer;