import { fork } from 'redux-saga/effects';
import authSaga from './auth.saga';
import wechatSaga from './wechat.saga';
function *rootSaga() {
  yield fork([
    authSaga,
    wechatSaga,
  ])
}

export default rootSaga;
