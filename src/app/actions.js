import { counterActions } from "../features/counterSlice";
import { authActions } from "../features/authSlice";

const actions = {
  counter:counterActions,
  auth:authActions,
};

export default actions;
