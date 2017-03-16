import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators as authActions } from '../../redux/authHandlers';
import Dashboard from './Dashboard';

class DashboardContainer extends Component {
  static navigationOptions = {
    title: 'Dashboard'
  };

  handleLogout = () => {
    this.props.dispatch(authActions.logout());
  };

  render() {
    return <Dashboard onLogout={this.handleLogout} />;
  }
}

export default connect()(DashboardContainer);
