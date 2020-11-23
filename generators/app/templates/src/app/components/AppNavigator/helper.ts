import { createRef } from 'react';
import { RouteProp, NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();

export const getRoute = (state: any): RouteProp<any, any> => {
  const route = state.routes[state.index];
  return route.state ? getRoute(route.state) : route;
};

export const getActiveRoute = () => getRoute(navigationRef.current!.getRootState());

const useNavigation = () => navigationRef.current;
export default useNavigation;
