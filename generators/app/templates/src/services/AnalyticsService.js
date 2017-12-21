import { NavigationActions } from 'react-navigation';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
import { GoogleAnalytics } from 'redux-beacon/targets/react-native';
import { createMiddleware } from 'redux-beacon';
import { getCurrentRouteName } from '../utils/navUtils';

const ANALYTICS_TRACKING_ID = Config.ANALYTICS_TRACKING_ID; // TODO: Declare this var in .env

const target = GoogleAnalytics(ANALYTICS_TRACKING_ID, GoogleAnalyticsTracker);

const pageView = (action, prevState) => ({
  hitType: 'pageview',
  page: getCurrentRouteName(prevState.nav)
});

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
