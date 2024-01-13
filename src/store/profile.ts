import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { Profile } from '@/types';
import { AppState } from './index';

const set: CaseReducer<Profile, PayloadAction<Profile>> = (_, action) => action.payload;

const profileSlice = createSlice({
  name: 'profile',
  initialState: null,
  reducers: {
    set,
  },
});
export const profileActions = profileSlice.actions;

export const profileSelectors = {
  get: (state: AppState): AppState['profile'] => {
    console.log('profileSelectors get');

    return state.profile;
  },
};

export const profile = profileSlice.reducer;
