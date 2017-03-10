import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects';
import {WILL_LOGIN_IN} from './../actions/auth';
import AuthService from './../services/auth';

function* fetchUser(action) {
   try {
      const user = yield call(AuthService.login, action.payload);
      yield put({type: "LOGIN_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "LOGIN_FAILED", message: e.message});
   }
}
export default function* authSaga() {
  yield* takeEvery("WILL_LOGIN_IN", fetchUser);
};
