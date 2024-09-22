import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, actions) => {
      state.userInfo = actions.payload;
      localStorage.setItem("userInfo", JSON.stringify(actions.payload));
      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
      localStorage.setItem("expirationTime", expirationTime);
      Cookies.set("token", actions.payload.token, {
        expires: expirationTime, // Expires in 30 days
      });
      Cookies.set("userInfo", JSON.stringify(actions.payload), {
        expires: expirationTime, // Expires in 30 days
      });
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("expirationTime");
      Cookies.remove("token");
      Cookies.remove("userInfo");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

// "Can you help me write a Redux slice using Redux Toolkit for managing user authentication? The slice should have an initial state that checks local storage for user information. If found, it should parse it; otherwise, it should be null. It should include two reducers: one for setting user credentials that also saves the information in local storage and sets an expiration time, and another for logging out, which clears the user information from both the state and local storage. Also, make sure to export the action creators and the reducer."
