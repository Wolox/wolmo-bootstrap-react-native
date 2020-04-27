import React from 'react';
import { appScreensNavOptions } from '@config/navigation';
import Routes from '@constants/routes';

export const getActiveRouteName = state => {
  // TODO: Remove this if when the initialState issue of react-navigation 5 is solved
  if (!state) return null;
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route.name;
};

export function analytics(previousRouteName, currentRouteName) {
  if (previousRouteName !== currentRouteName) {
    // The line below uses the @react-native-firebase/analytics tracker
    // Change this line to use another Mobile analytics SDK
    // analytics().setCurrentScreen(currentRouteName, currentRouteName);
    console.tron.log(currentRouteName);
  }
}

export function inferRoute(NavigationStructure) {
  return function screenComponent(screenObj) {
    const screenName = Routes[Object.keys(screenObj)?.[0]];
    return (
      <NavigationStructure.Screen
        name={screenName}
        component={screenObj[screenName]}
        options={appScreensNavOptions[screenName]}
      />
    );
  };
}
