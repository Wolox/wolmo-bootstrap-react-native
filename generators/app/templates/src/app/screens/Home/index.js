import React, { useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as authActions } from '@redux/auth/actions';

import Home from './layout';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(authActions.logout()), [dispatch]);

  return <Home onLogout={handleLogout} />;
};

export default memo(HomeContainer);
