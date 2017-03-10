import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './../components/App';
import configStore from './../stores';
import User from './user';
import LoginContainer from './../containers/login-container';
import authSaga from './../reducers/auth.saga';

console.log('User', User);
const store = configStore();
store.runSaga(authSaga)
const Root = () => (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
        <Route path='/user' />
      </Route>
      <Route path='/login' component={LoginContainer} />
		</Router>
	</Provider>
	);
export default Root;
