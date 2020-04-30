import { Dispatch } from 'react';
import { NavigationActions, StackActions, NavigationAction } from 'react-navigation';
import analytics from '@react-native-firebase/analytics';
import { ReduxObject } from '@interfaces/reduxInterfaces';
import { getPreviousRouteName } from '@utils/navUtils';

const trackNavigation = (routeName: string | null) => {
  if (routeName) analytics().setCurrentScreen(routeName, `${routeName}.js`);
};

const eventsTrackingMiddleware = ({ getState }: ReduxObject) => (next: Dispatch<any>) => (
  action: NavigationAction
) => {
  switch (action.type) {
    case NavigationActions.NAVIGATE:
    case StackActions.REPLACE:
      trackNavigation(action.routeName);
      break;
    case NavigationActions.BACK:
      trackNavigation(getPreviousRouteName(getState().nav));
      break;
    case StackActions.RESET:
      trackNavigation(action.actions[action.index].routeName);
      break;
    default:
      break;
  }
  return next(action);
  // TODO: Add other actions
};

export default eventsTrackingMiddleware;
