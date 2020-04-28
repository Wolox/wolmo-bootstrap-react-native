import React, { useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as authActions } from '@redux/auth/actions';
import { State } from '@interfaces/reduxInterfaces';

import './i18n';
import Login from './layout';

const LoginContainer = () => {
  const loading = useSelector<State, boolean>(state => state.auth.currentUserLoading);
  const dispatch = useDispatch();
  const handleLogin = useCallback(() => dispatch(authActions.login()), [dispatch]);

  return <Login onLogin={handleLogin} loading={loading} />;
};

export default memo(LoginContainer);
