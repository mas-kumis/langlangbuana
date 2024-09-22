import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./counter/authSlice";
import { userSlice } from "./services/auth";
import { blogSlice } from "./services/blog";

export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    [blogSlice.reducerPath]: blogSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSlice.middleware),
});

setupListeners(store.dispatch);
export default store;
