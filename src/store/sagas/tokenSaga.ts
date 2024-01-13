import { put, select, takeEvery } from 'redux-saga/effects';
import { tokenActions, tokenSelectors } from '../token';
import { profileActions } from '../profile';

export function* setToken(): Generator {
  const token = (yield select(tokenSelectors.get)) as string;
  localStorage.setItem('token', token || '');
  if (token) {
    yield put(
      profileActions.set({
        firstname: 'Mher',
        lastname: 'Simonyan',
        email: 'mher.simonyan.2003@gmail.com',
        tel: '+37496508150',
        birthdate: '2003-06-06',
      })
    );
  } else {
    yield put(profileActions.set(null));
  }
}

export function* tokenSaga() {
  yield takeEvery(tokenActions.gen().type, setToken);
}
