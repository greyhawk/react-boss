import { takeEvery, takeLatest, watch } from 'redux-saga'
import { call, put } from 'redux-saga/effects';
import WechatService from './../services/wechat';

import {
  WILL_POST_WECHAT_CONFIG,
  CREATE_WECHAT_FAILED,
  CREATE_WECHAT_SUCCESSED,
  WILL_LIST_WECHAT_CONFIG,
  LIST_WECHAT_SUCCESSED,
  LIST_WECHAT_FAILED,
  WILL_GET_WECHAT_CONFIG,
  VIEW_WECHAT_SUCCESSED,
  VIEW_WECHAT_FAILED,
  WILL_PUT_WECHAT_CONFIG,
  UPDATE_WECHAT_FAILED,
  UPDATE_WECHAT_SUCCESSED,
  WILL_REMOVE_WECHAT_CONFIG,
  REMOVE_WECHAT_CONFIG_SUCCESSED,
  REMOVE_WECHAT_CONFIG_FAILED
} from './../actions/wechat';

function* createWechat(action) {
   try {
      const config = yield call(WechatService.create, action.payload);
      yield put({type: CREATE_WECHAT_SUCCESSED, config});
   } catch (e) {
      yield put({type: CREATE_WECHAT_FAILED, message: e.message});
   }
}

function* fetchWechatList(action) {
   try {
      const list = yield call(WechatService.list, action.payload);
      yield put({type: LIST_WECHAT_SUCCESSED, list});
   } catch (e) {
      yield put({type: LIST_WECHAT_FAILED, message: e.message});
   }
}

function* fetchWechat(action) {
   try {
      const data = yield call(WechatService.view, action.payload.id);
      yield put({type: VIEW_WECHAT_SUCCESSED, data});
   } catch (e) {
      yield put({type: VIEW_WECHAT_FAILED, message: e.message});
   }
}

function* updateWechat(action) {
   try {
     const payload = action.payload;
      const data = yield call(WechatService.update, payload.id, payload);
      yield put({type: UPDATE_WECHAT_SUCCESSED, data});
   } catch (e) {
      yield put({type: UPDATE_WECHAT_FAILED, message: e.message});
   }
}

function* removeWechat(action) {
   try {
     const payload = action.payload;
      const data = yield call(WechatService.remove, payload.id);
      console.log('data------');
      yield put({type: REMOVE_WECHAT_CONFIG_SUCCESSED});
   } catch (e) {
      yield put({type: REMOVE_WECHAT_CONFIG_FAILED, message: e.message});
   }
}


export default function* wechatViewSaga() {
  yield* [
    takeEvery(WILL_GET_WECHAT_CONFIG, fetchWechat),
    takeEvery(WILL_LIST_WECHAT_CONFIG, fetchWechatList),
    takeEvery(WILL_POST_WECHAT_CONFIG, createWechat),
    takeEvery(WILL_PUT_WECHAT_CONFIG, updateWechat),
    takeEvery(WILL_REMOVE_WECHAT_CONFIG, removeWechat),
  ];
};
