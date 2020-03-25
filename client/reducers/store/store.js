import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import history from '../../utils/history';
import createRootReducer from '../rootReducer';

const middleware = routerMiddleware(history);

const middlewares = [thunkMiddleware, middleware, logger];

const enhancers = [
  applyMiddleware(...middlewares), // empty for now;
];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    : compose;
/* eslint-disable no-underscore-dangle */

// Redux store to hold the app state
const store = createStore(createRootReducer(history), composeEnhancers(...enhancers));

export default store;
