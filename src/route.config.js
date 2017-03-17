import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import configStore from './store.config';
import LoginContainer from './containers/login-container';
import HomeContainer from './containers/home-container';
import Welcome from './components/welcome';
import NewsContainer from './containers/news-container.js';
import NewsViewContainer from './containers/news-view-container';
import ScenicContainer from './containers/scenic-container';
import WechatViewContainer from './containers/wechat-view-container';
import WechatListContainer from './containers/wechat-list-container';
import WechatCreateContainer from './containers/wechat-create-container';
import ApiList from './components/api-list';
const store = configStore();
import rootSaga from './sagas/index.saga';

store.runSaga(rootSaga);
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
        <Route path='/config/wechat' component={WechatListContainer} />
        <Route path='/config/wechat/create' component={WechatCreateContainer} />
        <Route path='/config/wechat/:id' component={WechatViewContainer} />

        <Route path='/config/api' component={ApiList} />
      </Route>
		</Router>
	</Provider>
);
export default Root;
