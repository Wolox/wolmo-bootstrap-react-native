import { appScreensNavOptions } from '@config/navigation';
import Routes from '@constants/routes';

export const getCurrentRouteName = navigationState => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

export const getPreviousRouteName = navigationState => {
  if (!navigationState || !navigationState.index) {
    return null;
  }
  return navigationState.routes[navigationState.index - 1].routeName;
};

export function inferRoute(screenObj) {
  const screenName = Routes[(Object.keys(screenObj)?.[0])];
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
