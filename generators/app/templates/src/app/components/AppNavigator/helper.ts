import * as React from 'react';
import { RouteProp } from '@react-navigation/native';

export const navigationRef: React.RefObject<any> = React.createRef();

export default function useNavigation() {
  return navigationRef.current;
}

export function getRoute(state: any): RouteProp<any, any> {
  const route = state.routes[state.index];

  if (route.state) {
    return getRoute(route.state);
  }

  return route;
}

export function getActiveRoute() {
  return getRoute(navigationRef.current.getRootState());
}
