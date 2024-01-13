import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { token } from './token';
import { mount } from './mount';
import { profile } from './profile';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    token,
    mount,
    profile,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
