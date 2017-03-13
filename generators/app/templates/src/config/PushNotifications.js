import PushNotification from 'react-native-push-notification';

import { actionCreators as notificationActions } from '../redux/pushNotificationHandlers';

const formatReceivedNotification = push => {
  if (push.alert && push.alert.APNS_SANDBOX) {
    push.alert = JSON.parse(push.alert.APNS_SANDBOX).aps.alert;
  }
  if (push.message && push.message.APNS_SANDBOX) {
    push.message = JSON.parse(push.message.APNS_SANDBOX).aps.message;
  }
  return push;
};

export default function setUp(dispatch, isLoggedIn) {
  const senderID = '';

  if (!senderID) {
    console.warn('Push notifications senderID has not been set. Make sure to setup your google project');
  }

  PushNotification.configure({
    onRegister(data) {
      dispatch(notificationActions.register(data.token));
      if (isLoggedIn) {
        dispatch(notificationActions.updateToken());
      }
    },
    onNotification(notification) {
      dispatch(notificationActions.notificationReceived(formatReceivedNotification(notification)));
    },
    senderID,
    permissions: {
      alert: true,
      badge: true,
      sound: true
    },
    popInitialNotification: true,
    requestPermissions: true
  });
}
