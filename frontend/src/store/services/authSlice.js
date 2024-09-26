import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      const expirationTime = new Date().getTime() + 3600000;
      localStorage.setItem("expirationTime", expirationTime);
      Cookie.set("token", action.payload.token, {
        expires: new Date(expirationTime),
      });
      return state;
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("expirationTime");
      Cookie.remove("token");
      return state;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
