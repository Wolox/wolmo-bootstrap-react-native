import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from '@components/AppNavigator';
import { ErrorHandler } from '@components/ErrorBoundary';
import { ExceptionHandler } from '@components/ErrorBoundary/ExceptionHandler';
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
    ExceptionHandler();
  }, [dispatch]);

  return (
    <ErrorHandler>
      <AppNavigator />
    </ErrorHandler>
  );
};

const MyAppWithOverlay = __DEV__ ? Reactotron.overlay(App) : App;

export default MyAppWithOverlay;
