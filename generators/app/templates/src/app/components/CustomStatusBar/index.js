import React from 'react';
import { StatusBar } from 'react-native';
import { statusBarStyles } from '@config/navigation';

const CustomStatusBar = ({ routeName }) => {
  const statusBarProps = statusBarStyles[routeName] || statusBarStyles.default;
  return <StatusBar animated {...statusBarProps} />;
};

export default CustomStatusBar;
