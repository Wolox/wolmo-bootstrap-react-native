import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@navigation';

import Navigator from './navigator';

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
