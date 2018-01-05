import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators as authActions } from '../../../redux/auth/actions';

import Login from './layout';

class LoginContainer extends Component {
  handleLogin = () => {
    this.props.dispatch(authActions.login());
  };

  render() {
    return <Login onLogin={this.handleLogin} />;
  }
}

export default connect()(LoginContainer);
