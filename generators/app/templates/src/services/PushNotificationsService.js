import { Platform, Alert } from 'react-native';

let PushNotification;
try {
  PushNotification = require('react-native-push-notification'); // eslint-disable-line global-require
} catch (e) {} // eslint-disable-line no-empty, prettier/prettier

import api from '../config/api'; // eslint-disable-line import/first

const PUSH_NOTIFICATION_HANDLERS = {
  hello() {
    Alert.alert('Hello!');
  }
};

export default {
  updateDeviceToken(token, userEmail) {
    const data = {
      email: userEmail,
      device_type: Platform.OS,
      device_token: token
    };
    const apiEndpoint = '';
    if (!apiEndpoint) {
      console.warn('Api endpoint to update device token has not been set');
    }
    return apiEndpoint ? api.put('/users/sessions/device_token', data) : Promise.reject();
  },
  triggerLocalNotification(data) {
    if (PushNotification) {
      PushNotification.localNotification(data);
      console.warn(
        'If PushNotificationIOS has already been linked, remove the unnecessary checks in src/services/PushNotificationsService.js'
      );
    } else {
      console.warn(
        'PushNotificationIOS has not been linked and will not work. Read more here: https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking'
      );
    }
  },
  getPushNotificationHandler(pushType) {
    let handler = PUSH_NOTIFICATION_HANDLERS[pushType];
    if (!handler) {
      console.warn(`Push notification with type ${pushType} is not being handled`);
      // do nothing
      handler = () => {};
    }
    return handler;
  },
  displayPushNotificationPrompt: message =>
    new Promise(resolve => {
      Alert.alert(
        message,
        '',
        [
          {
            text: 'Ver',
            onPress() {
              resolve(true);
            }
          },
          {
            text: 'Cerrar',
            style: 'cancel',
            onPress() {
              resolve();
            }
          }
        ],
        { cancelable: false }
      );
    })
};
