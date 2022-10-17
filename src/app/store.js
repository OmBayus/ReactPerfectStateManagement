import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import authReducer from "../features/authSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
