import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import configStore from './store.config';
import LoginContainer from './containers/login-container';
import authSaga from './sagas/auth.saga';
import HomeContainer from './containers/home-container';
import Welcome from './components/welcome';
import NewsContainer from './containers/news-container.js';
import NewsViewContainer from './containers/news-view-container';
import ScenicContainer from './containers/scenic-container';
import 'antd/lib/spin/style/css';
import { Form, Icon, Input, Button, Checkbox, Spin} from 'antd';
const store = configStore();
store.runSaga(authSaga);
//if token exists, redirect to home page,
const auth = (nextState, replace) => {
  if (window.localStorage.getItem('auth')) {
    replace({ pathname: '/'})
  }
}
const Root = () => (
	<Provider store={store}>
		<Router history={browserHistory}>
      <Route path='/login' component={LoginContainer} onEnter={auth} />
			<Route path="/" component={HomeContainer}>
        <IndexRoute component={Welcome} />
        <Route path='/news' component={NewsContainer} />
        <Route path='/news/:id' component={NewsViewContainer} />
        <Route path='/scenic' component={ScenicContainer} />
      </Route>
		</Router>
	</Provider>
);
export default Root;
