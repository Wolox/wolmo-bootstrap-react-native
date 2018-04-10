import Config from 'react-native-config';
import { NavigationActions } from 'react-navigation';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
import GoogleAnalytics, { trackEvent } from '@redux-beacon/react-native-google-analytics';
import { createMiddleware } from 'redux-beacon';

import { getCurrentRouteName } from '../../utils/navUtils';

export const checkAnalyticsTrackingID = () => {
  if (!Config.ANALYTICS_TRACKING_ID) {
    console.warn('Google Analytics Tracking ID has not been properly initialized');
  }
};

const target = GoogleAnalytics(Config.ANALYTICS_TRACKING_ID, GoogleAnalyticsTracker);

const pageView = trackEvent((action, prevState) => ({
  hitType: 'pageview',
  page: getCurrentRouteName(prevState.nav)
}));

const eventsMap = {
  [NavigationActions.NAVIGATE]: pageView,
  [NavigationActions.BACK]: pageView,
  [NavigationActions.RESET]: pageView
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
