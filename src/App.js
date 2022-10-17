import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Deneme from "./Deneme";
import actions from "./app/actions";

class App extends React.Component {
  getChildContext() {
    return this.props;
  }
  render() {
    return <Deneme />;
  }
}

App.childContextTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
};

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  for (const key in actions) {
    for (const action in actions[key]) {
      const actionCreator = actions[key][action];
      actions[key][action] = (action) => dispatch(actionCreator(action));
    }
  }
  return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
