import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class StateManagment extends React.Component {
  getChildContext() {
    return { state: this.props.state, actions: this.props.actions };
  }
  render() {
    return <>{this.props.children}</>;
  }
}

StateManagment.childContextTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
};

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch,{actions}) {

  for (const key in actions) {
    for (const action in actions[key]) {
      const actionCreator = actions[key][action];
      actions[key][action] = (action) => dispatch(actionCreator(action));
    }
  }
  return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(StateManagment);
