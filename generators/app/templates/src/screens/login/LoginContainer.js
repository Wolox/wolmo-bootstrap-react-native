import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators as authActions } from '../../redux/authHandlers';

import Login from './Login';

class LoginContainer extends Component {
  handleLogin = () => {
    this.props.dispatch(authActions.login());
  };

  render() {
    return <Login onLogin={this.handleLogin} />;
  }
}

export default connect()(LoginContainer);
