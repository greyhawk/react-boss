import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './../components/App';
import configStore from './../stores';
import User from './user';
import LoginContainer from './../containers/login-container';

const store = configStore();
const Root = () => (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
        <Route path='/login' component={LoginContainer} />
        <User></User>
      </Route>
		</Router>
	</Provider>
	);
export default Root;
