import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './../components/App';
import configStore from './../stores';
import LoginContainer from './../containers/login-container';
import authSaga from './../reducers/auth.saga';
import HomeContainer from './../containers/home-container';
import Welcome from './../components/welcome';
import OrderContainer from './../containers/order-container.js';
const store = configStore();
store.runSaga(authSaga);

const Root = () => (
	<Provider store={store}>
		<Router history={hashHistory}>
      <Route path='/login' component={LoginContainer} />
			<Route path="/" component={HomeContainer}>
        <IndexRoute component={Welcome} />
        <Route path='/order' component={OrderContainer} />
      </Route>
		</Router>
	</Provider>
);
export default Root;
