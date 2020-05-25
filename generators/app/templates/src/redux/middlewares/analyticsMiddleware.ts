// TODO: Uncomment lines when you start using them
// import analytics from '@react-native-firebase/analytics'; TODO: Use later when you want to catch some redux actions here in this middleware
import { Dispatch } from 'react';
// import { ReduxObject } from '@interfaces/reduxInterfaces';

const eventsTrackingMiddleware = (/* TODO: { getState }: ReduxObject in the future*/) => (
  next: Dispatch<any>
) => (action: any) => {
  switch (action.type) {
    // TODO: Here catch redux actions and use analytics
    default:
      break;
  }
  return next(action);
  // TODO: Add other actions
};

export default eventsTrackingMiddleware;
