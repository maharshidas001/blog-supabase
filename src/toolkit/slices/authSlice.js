import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignedIn: false,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isSignedIn = false;
      state.user = null;
      state.isSignedIn = action.payload.isSignedIn;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isSignedIn = false;
      state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;