import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators as authActions } from '../../redux/authHandlers';
import Login from './Login';

class LoginContainer extends Component {
  static navigationOptions = {
    title: 'Login'
  };

  handleLogin = () => {
    this.props.dispatch(authActions.login());
  };

  render() {
    return <Login onLogin={this.handleLogin} loading={this.props.loading} />;
  }
}

LoginContainer.propTypes = {
  loading: React.PropTypes.bool
};

const mapStateToProps = store => ({
  loading: store.auth.loading
});

export default connect(mapStateToProps)(LoginContainer);
