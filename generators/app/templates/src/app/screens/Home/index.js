import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators as authActions } from '../../../redux/auth/actions';

import Home from './layout';

class HomeContainer extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.logout());
  };

  render() {
    return <Home onLogout={this.handleLogout} />;
  }
}

export default connect()(HomeContainer);
