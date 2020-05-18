import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';
import logger from 'redux-logger';

export const history = require('history').createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    if (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
        const devToolsExtension = (window as any)['__REDUX_DEVTOOLS_EXTENSION__'];
        middleware.push(logger);
        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
