import React from "react";
import Deneme from "./Deneme";
import ContextRedux from "./Lib";
import store from "./app/store";
import actions from "./app/actions";

const App = () => {
  return (
    <div>
      <ContextRedux store={store} actions={actions}>
        <Deneme/>
      </ContextRedux>
    </div>
  );
};

export default App;
