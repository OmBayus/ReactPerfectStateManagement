import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  name: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.auth = true;
      console.log(action.payload);
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.auth = initialState.auth;
      state.name = initialState.name;
    },
  },
});
const authActions = authSlice.actions;
// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;
export { authActions };

export default authSlice.reducer;
