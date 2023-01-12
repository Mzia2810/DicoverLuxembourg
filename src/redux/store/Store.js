import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slice/UserSlice";
export default configureStore({
  users: usersReducer,
});
