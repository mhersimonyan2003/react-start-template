import { put, call, select, takeEvery } from 'redux-saga/effects';
import { tokenActions, tokenSelectors } from '../token';
import { getProfile } from '@/api/profile';
import { Profile } from '@/types';
import { profileActions } from '../profile';

export function* setToken(): Generator {
  const token = (yield select(tokenSelectors.get)) as string;
  console.log(token);

  localStorage.setItem('token', token || '');

  if (token) {
    try {
      const profile = (yield call(getProfile)) as Profile;
      yield put(profileActions.set(profile));
    } catch (err) {
      console.log(err);
    }
  } else {
    yield put(profileActions.set(null));
  }
}

export function* clearToken(): Generator {
  localStorage.setItem('token', '');
  yield put(profileActions.set(null));
}

export function* tokenSaga() {
  yield takeEvery(tokenActions.set().type, setToken);
  yield takeEvery(tokenActions.clear().type, clearToken);
}
