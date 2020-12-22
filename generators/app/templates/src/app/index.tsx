import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from '@components/AppNavigator';
import { apiSetup } from '@config/api';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import './i18n';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    apiSetup();
    dispatch(AuthActions.init());
  }, [dispatch]);

  return <AppNavigator />;
};

const MyAppWithOverlay = __DEV__ ? Reactotron.overlay(App) : App;

export default MyAppWithOverlay;
