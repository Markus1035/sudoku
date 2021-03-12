import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootreducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development')
    middlewares.push(logger);

export const store = createStore(rootreducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
