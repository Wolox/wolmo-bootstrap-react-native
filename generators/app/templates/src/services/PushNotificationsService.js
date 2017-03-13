import { Platform, Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

import api from '../config/api';

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
    PushNotification.localNotification(data);
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
