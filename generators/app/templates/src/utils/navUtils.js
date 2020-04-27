import React from 'react';
import { appScreensNavOptions } from '@config/navigation';
import Routes from '@constants/routes';

export function getActiveRoute(state) {
  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRoute(route.state);
  }

  return route;
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
