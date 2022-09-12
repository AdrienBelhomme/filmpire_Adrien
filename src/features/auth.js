import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: '',
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem('session_id');

      localStorage.setItem('accountID', action.payload.id);
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;

export const userSelector = (state) => state.user;
