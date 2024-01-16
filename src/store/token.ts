import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { AppState } from './index';

const set: CaseReducer<string, PayloadAction<string>> = (_, action) => action.payload;

const initialState: string = null;

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    set,
    clear: () => null,
  },
});
export const tokenActions = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: AppState): AppState['token'] => {
    // console.log('tokenSelectors get');

    return state.token || localStorage.getItem('token');
  },
};

export const token = tokenSlice.reducer;
