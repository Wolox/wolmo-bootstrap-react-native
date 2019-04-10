import Config from 'react-native-config';
import { NavigationActions, StackActions } from 'react-navigation';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
import GoogleAnalytics from '@redux-beacon/react-native-google-analytics';
import { createMiddleware } from 'redux-beacon';

import { getPreviousRouteName } from '../../utils/navUtils';

const trackingId = Config.ANALYTICS_TRACKING_ID;
const PAGE_VIEW = 'pageview';

export const checkAnalyticsTrackingID = () => {
  if (!trackingId) {
    console.warn('Google Analytics Tracking ID has not been properly initialized');
  }
};

const target = GoogleAnalytics(trackingId, GoogleAnalyticsTracker);

const pageView = action => ({ hitType: PAGE_VIEW, page: action.routeName });

const backNavigationView = (action, prevState) => ({
  hitType: PAGE_VIEW,
  page: getPreviousRouteName(prevState.nav)
});

const eventsMap = {
  [NavigationActions.NAVIGATE]: pageView,
  [NavigationActions.BACK]: backNavigationView,
  [StackActions.RESET]: action => pageView(action.actions[0])
  // TODO: Replace with anothers actions.
  // For search the possible actions, check this: https://developers.google.com/analytics/devguides/collection/analyticsjs/events
  // These actions are by way of example.
  /*
  '@@redux-form/SET_SUBMIT_SUCCEEDED': () => ({
    hitType: 'event',
    eventCategory: 'button-click',
    eventAction: 'Login Submit'
  }),
  '@@redux-form/DESTROY': () => ({
    hitType: 'event',
    eventCategory: 'action',
    eventAction: 'Login Success'
  })
  */
};

export default createMiddleware(eventsMap, target);
