import React from "react";
import { Provider } from "react-redux";
import StateManagment from "./StateManagment";

const ProviderWrapper = ({ children,store,actions }) => {
  return (
    <Provider store={store}>
      <StateManagment actions={actions}>
        {children}
      </StateManagment>
    </Provider>
  );
};

export default ProviderWrapper;
