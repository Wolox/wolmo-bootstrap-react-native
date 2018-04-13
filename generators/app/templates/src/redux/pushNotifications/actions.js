import { createTypes } from 'redux-recompose';

import { isAndroid } from '../../constants/platform';
import PushNotificationsService from '../../services/PushNotificationsService';

export const actions = createTypes(['REGISTER', 'NOTIFICATION_RECEIVED'], '@@PUSH_NOTIFICATIONS');

export const actionCreators = {
  register: token => ({
    type: actions.REGISTER,
    target: 'token',
    payload: token
  }),
  notificationReceived: notification => dispatch => {
    /**
     * if the push was tapped by the user (userInteraction flag) trigger the push action
     * if the push was not tapped by the user:
     * a- if the push was not received while the app is in foreground it will appear in the notification bar
     * b- if the push was received while the app is in foreground it wont appear in the notification bar so
     *    1- android: trigger a local notification that will appear in the notification bar
     *    2- ios: display an alert
     */
    const handler = PushNotificationsService.getPushNotificationHandler(
      isAndroid ? notification.type : notification.data.type
    );

    if (notification.userInteraction) {
      handler(dispatch, isAndroid ? notification : notification.data);
    } else if (notification.foreground) {
      if (isAndroid) {
        PushNotificationsService.triggerLocalNotification(notification);
      } else {
        PushNotificationsService.displayPushNotificationPrompt(notification.alert).then(triggerPushAction => {
          if (triggerPushAction) {
            handler(dispatch, notification.data);
          }
        });
      }
    }

    dispatch({
      type: actions.NOTIFICATION_RECEIVED,
      payload: { notification }
    });
  }
};
