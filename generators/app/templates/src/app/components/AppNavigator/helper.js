import * as React from 'react';

export const navigationRef = React.createRef();

export default function useNavigation() {
  return navigationRef.current;
}

export function getRoute(state) {
  const route = state.routes[state.index];

  if (route.state) {
    return getRoute(route.state);
  }

  return route;
}

export function getActiveRoute() {
  return getRoute(navigationRef.current.getRootState());
}
