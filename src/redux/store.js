import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

/*
Add Middleware to our store so that whenever actions get fired or dispatched , we can catch them
and then display them , It lies between actions-firing and root-reducer
middleware is array in redux
*/