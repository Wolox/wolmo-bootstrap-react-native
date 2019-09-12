import React, { useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './i18n';
import Login from './layout';

import { actionCreators as authActions } from '@redux/auth/actions';

const LoginContainer = () => {
  const loading = useSelector(state => state.auth.currentUserLoading);
  const dispatch = useDispatch();
  const handleLogin = useCallback(() => dispatch(authActions.login()), [dispatch]);

  return <Login onLogin={handleLogin} loading={loading} />;
};

export default memo(LoginContainer);
