let PushNotification;
try {
  PushNotification = require('react-native-push-notification'); // eslint-disable-line global-require
} catch (e) {} // eslint-disable-line no-empty, prettier/prettier

import { actionCreators as notificationActions } from '../redux/pushNotifications/actions'; // eslint-disable-line import/first

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
  if (PushNotification) {
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
    console.warn(
      'If PushNotificationIOS has already been linked, remove the unnecessary checks in src/config/PushNotifications.js'
    );
  } else {
    console.warn(
      'PushNotificationIOS has not been linked and will not work. Read more here: https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking'
    );
  }
}
