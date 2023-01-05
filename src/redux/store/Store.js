import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../slice/UserSlice";

export const store = configureStore({
  reducer: {
    user: postSlice,
  },
});
