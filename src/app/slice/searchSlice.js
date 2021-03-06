import { createSlice } from '@reduxjs/toolkit';

const initialState = { keyword: '' };

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword(state, action) {
      state.keyword = action.payload || '';
    },
    clearSearch() {
      return initialState;
    },
  },
});

export const { setKeyword, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
