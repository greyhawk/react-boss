import {createStore, applyMiddleware} from 'redux';
<<<<<<< HEAD:src/store.config.js
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
=======
import reducers from './../reducers';
>>>>>>> 6d554e8c44a9dc79de1ed871dfadbb98e309cd38:src/stores/index.js
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
