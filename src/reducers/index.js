import {combineReducers} from 'redux';
import home from './home.js'
import auth from './auth.js';
export default combineReducers({
	home,
  auth,
});
