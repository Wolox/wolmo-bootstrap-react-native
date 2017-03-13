import Immutable from 'seamless-immutable';

import { stringArrayToObject } from '../utils/reduxUtils';
import PushNotificationsService from '../services/PushNotificationsService';
import { isAndroid } from '../utils/constants';

/* ------------- Notifications actions ------------- */
export const actions = stringArrayToObject(['REGISTER', 'UPDATE_TOKEN', 'NOTIFICATION_RECEIVED']);

export const actionCreators = {
  register(token) {
    return {
      type: actions.REGISTER,
      payload: { token }
    };
  },
  updateToken() {
    return {
      type: actions.UPDATE_TOKEN
    };
  },
  notificationReceived(notification) {
    return dispatch => {
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
          PushNotificationsService.displayPushNotificationPrompt(
            notification.alert
          ).then(triggerPushAction => {
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
    };
  }
};

/* ------------- Notifications reducer ------------- */
const defaultState = {
  unreadNotifications: [],
  readNotifications: [],
  token: null
};

/* eslint-disable complexity */
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.REGISTER: {
      return state.merge({ token: action.payload.token }, { deep: true });
    }
    case actions.NOTIFICATION_RECEIVED: {
      const push = action.payload.notification;
      return state.merge(
        {
          unreadNotifications: push.userInteraction
            ? state.unreadNotifications.filter(unreadPush => push.id !== unreadPush.id)
            : state.unreadNotifications.concat([push]),
          readNotifications: push.userInteraction
            ? state.readNotifications.concat([push])
            : state.readNotifications
        },
        { deep: true }
      );
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */
