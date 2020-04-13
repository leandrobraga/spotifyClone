import { createStore, compose, applyMiddleware } from 'redux';
import createsagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createsagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
