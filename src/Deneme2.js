import React, { useState } from "react";
import PropTypes from "prop-types";

function Deneme2(props, context) {
  const [name,setName] = useState("")
  if (!context.state.auth.auth) {
    return (
      <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}  />
        <button onClick={() => context.actions.auth.login({ name })}>
          Sigin
        </button>
      </div>
    );
  }
  return (
    <div>
      <h1>{context.state.auth.name}</h1>
      <h1>{context.state.counter.value}</h1>
      <button onClick={() => context.actions.counter.increment()}>Click</button>
      <button onClick={() => context.actions.auth.logout()}>Logout</button>
    </div>
  );
}

Deneme2.contextTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
};

export default Deneme2;
