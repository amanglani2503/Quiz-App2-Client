import { createSlice } from '@reduxjs/toolkit';

export const loginReducer = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    user: null,
    token: null,
    error: null
  },
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
    }
  }
});

export const { loginSuccess, logout } = loginReducer.actions;

export default loginReducer.reducer;
