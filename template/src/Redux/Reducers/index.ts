import intlReducer from './i18n';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
    routingState: routerReducer,
    i18nState: intlReducer,
})