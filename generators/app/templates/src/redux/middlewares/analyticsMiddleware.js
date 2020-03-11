import { NavigationActions, StackActions } from 'react-navigation';
import analytics from '@react-native-firebase/analytics';
import { getPreviousRouteName } from '@utils/navUtils';

const trackNavigation = routeName => {
  if (routeName) analytics().setCurrentScreen(routeName, routeName);
};

const eventsTrackingMiddleware = getState => next => action => {
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
  }
  return next(action);
  // TODO: Add other actions
};

export default eventsTrackingMiddleware;
