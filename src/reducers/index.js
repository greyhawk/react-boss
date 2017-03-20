import {combineReducers} from 'redux';
import home from './home.js'
import auth from './auth.js';
import wechat from './wechat.js';
export default combineReducers({
	home,
  auth,
	wechat,
});
