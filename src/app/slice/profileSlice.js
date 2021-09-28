import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: null,
  reducers: {
    setProfile(state, action) {
      return action.payload || null;
    },
    clearProfile() {
      localStorage.removeItem('token');
      localStorage.removeItem('rfToken');
      return null;
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
