// import analytics from '@react-native-firebase/analytics'; TODO: Use later when you want to catch some redux actions here in this middleware

const eventsTrackingMiddleware = ({ getState }) => next => action => {
  switch (action.type) {
    // TODO: Here catch redux actions and use analytics
    default:
      break;
  }
  return next(action);
  // TODO: Add other actions
};

export default eventsTrackingMiddleware;
