import { call, put, takeEvery} from 'redux-saga/effects';
import {WILL_LOGIN_IN} from './../actions/auth';
import AuthService from './../services/auth';

function* fetchUser(action) {
   try {
      const user = yield call(AuthService.login, action.payload);
      const accessToken = user.accessToken;
      window.localStorage.setItem('auth', JSON.stringify(accessToken));
      const message = 'authorized';
      yield put({type: "LOGIN_SUCCEEDED", message});
   } catch (e) {
      yield put({type: "LOGIN_FAILED", message: e.message});
   }
}
export default function* authSaga() {
  yield* takeEvery(WILL_LOGIN_IN, fetchUser);
};
