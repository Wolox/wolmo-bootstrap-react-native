import { RefObject, createRef } from 'react';
import { RouteProp } from '@react-navigation/native';

export const navigationRef: RefObject<any> = createRef();

export default function useNavigation() {
  return navigationRef.current;
}

export function getRoute(state: any): RouteProp<any, any> {
  const route = state.routes[state.index];
  return route.state ? getRoute(route.state) : route;
}

export function getActiveRoute() {
  return getRoute(navigationRef.current.getRootState());
}
