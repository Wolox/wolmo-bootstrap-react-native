import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as authActions } from '../../../redux/auth/actions';

import Login from './layout';

class LoginContainer extends Component {
  handleLogin = () => {
    this.props.dispatch(authActions.login());
  };

  render() {
    return <Login onLogin={this.handleLogin} loading={this.props.loading} />;
  }
}

LoginContainer.propTypes = {
  loading: PropTypes.bool
};

const mapStateToProps = store => ({
  loading: store.auth.currentUserLoading
});

export default connect(mapStateToProps)(LoginContainer);
