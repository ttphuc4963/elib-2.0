import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './slice/profileSlice';
import searchSlice from './slice/searchSlice';

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    search: searchSlice,
  },
});
