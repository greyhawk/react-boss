import {createStore, applyMiddleware} from 'redux';
import reducers from './../reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger()
export default function configStore() {
  return createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
