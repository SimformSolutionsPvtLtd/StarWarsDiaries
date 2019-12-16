import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
import rootReducer from './index';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleWare = [sagaMiddleware];

// Add middleware to redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(...middleWare);

const enhancers = __DEV__
  ? composeEnhancers(middlewares, console.tron.createEnhancer())
  : compose(middlewares);

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);
// Enable persistence
export default { store };
