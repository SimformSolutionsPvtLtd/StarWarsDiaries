import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
import rootReducer from './index';

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

// Add middleware to redux store
const middlewares = applyMiddleware(...middleWare);

const enhancers = compose(middlewares);

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

export default { store };
