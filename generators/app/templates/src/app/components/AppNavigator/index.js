import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { createReduxContainer } from 'react-navigation-redux-helpers';

import { ROOT } from '@constants/platform';
import Navigator from '@screens';

const AppWithNavigationState = createReduxContainer(Navigator, ROOT);

const AppNavigator = () => {
  const state = useSelector(state => state.nav);
  const dispatch = useDispatch();

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

  return <AppWithNavigationState state={state} dispatch={dispatch} />;
};

export default AppNavigator;
