import { NavigationState } from 'react-navigation';
import { appScreensNavOptions } from '@config/navigation';
import Routes from '@constants/routes';
import { ScreenObj, ScreenRoute } from '@interfaces/globalInterfaces';

// TODO: This could change depending how you implement the structure of navigation
export const getCurrentRouteName = (navigationState: NavigationState): string | null => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

// TODO: This could change depending how you implement the structure of navigation
export const getPreviousRouteName = (navigationState: NavigationState) => {
  if (!navigationState || !navigationState.index) {
    return null;
  }
  return navigationState.routes[navigationState.index - 1].routeName;
};

export function inferRoute(screenObj: ScreenObj): ScreenRoute {
  const screenName = Routes[Object.keys(screenObj)?.[0]];
  return (
    screenName && {
      [screenName]: {
        screen: screenObj[screenName],
        navigationOptions: appScreensNavOptions[screenName],
        ...screenObj
      }
    }
  );
}
