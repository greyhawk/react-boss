import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import configStore from './../stores';
import LoginContainer from './../containers/login-container';
import authSaga from './../reducers/auth.saga';
import HomeContainer from './../containers/home-container';
import Welcome from './../components/welcome';
import OrderContainer from './../containers/news-container.js';
import ScenicContainer from './../containers/scenic-container';

const store = configStore();
store.runSaga(authSaga);

const Root = () => (
	<Provider store={store}>
		<Router history={browserHistory}>
      <Route path='/login' component={LoginContainer} />
			<Route path="/" component={HomeContainer}>
        <IndexRoute component={Welcome} />
        <Route path='/news' component={OrderContainer} />
        <Route path='/scenic' component={ScenicContainer} />
      </Route>
		</Router>
	</Provider>
);
export default Root;
