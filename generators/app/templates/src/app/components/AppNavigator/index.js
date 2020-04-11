import React, { useEffect } from 'react';
import { BackHandler, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { ROOT } from '@constants/platform';
import { statusBarStyles } from '@config/navigation';
import { getCurrentRouteName } from '@utils/navUtils';

import Navigator from './navigator';

const AppWithNavigationState = createReduxContainer(Navigator, ROOT);

const AppNavigator = () => {
  const state = useSelector(store => store.nav);
  const dispatch = useDispatch();
  const statusBarProps = statusBarStyles[getCurrentRouteName(state)] || statusBarStyles.default;

  useEffect(() => {
    const onBackPress = () => {
      if (state.index === 0) {
        return false;
      }
      dispatch(NavigationActions.back());
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [state.index, dispatch]);

  return (
    <>
      <StatusBar animated {...statusBarProps} />
      <AppWithNavigationState state={state} dispatch={dispatch} />
    </>
  );
};

export default AppNavigator;
