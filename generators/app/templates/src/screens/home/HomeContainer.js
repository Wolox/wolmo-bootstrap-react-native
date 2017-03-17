import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators as authActions } from '../../redux/authHandlers';
import Home from './Home';

class HomeContainer extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  handleLogout = () => {
    this.props.dispatch(authActions.logout());
  };

  render() {
    return <Home onLogout={this.handleLogout} />;
  }
}

export default connect()(HomeContainer);
