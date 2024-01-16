import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './index';

const mountSlice = createSlice({
  name: 'mount',
  initialState: false,
  reducers: {
    triggerMount: () => true,
  },
});
export const mountActions = mountSlice.actions;

export const mountSelectors = {
  get: (state: AppState): AppState['mount'] => {
    // console.log('mount get');

    return state.mount;
  },
};

export const mount = mountSlice.reducer;
