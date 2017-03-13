import {createStore, applyMiddleware} from 'redux';
import reducers from './../reducers';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

const loggerMiddleware = createLogger();
const authSagaMiddleware = createSagaMiddleware()
export default function configStore() {
  const store = createStore(
    reducers,
    applyMiddleware(
      loggerMiddleware,
      authSagaMiddleware
    )
  );
  store.runSaga = authSagaMiddleware.run;
  return store;
}
