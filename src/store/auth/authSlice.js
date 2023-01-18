import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: !!localStorage.getItem("ACCESS_TOKEN"),
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.false = true;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
