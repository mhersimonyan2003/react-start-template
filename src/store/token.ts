import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './index';

const tokenSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token'),
  reducers: {
    gen: () => Math.random().toString(16),
    same: (state) => state,
    clear: () => null,
  },
});
export const tokenActions = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: AppState): AppState['token'] => {
    console.log('tokenSelectors get');

    return state.token;
  },
};

export const token = tokenSlice.reducer;
