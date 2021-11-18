import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Launch } from './launches.interface';

export interface LaunchState {
  list: Launch[];
  isLoading: boolean;
}

const initialState: LaunchState = {
  list: [],
  isLoading: true,
};

export const launchesSlice = createSlice({
  name: 'launch',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    fetchLaunches: (state, action: PayloadAction<number>) => {},
    launchesFetched: (state, action: PayloadAction<Launch[]>) => {
      state.list = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setLoading, launchesFetched, fetchLaunches } = launchesSlice.actions;

export default launchesSlice.reducer;
