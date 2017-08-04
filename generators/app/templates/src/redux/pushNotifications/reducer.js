import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import { actions } from './actions';

const defaultState = {
  unreadNotifications: [],
  readNotifications: [],
  token: null
};

/* eslint-disable complexity */
export default function reducer(state = Immutable(defaultState), action) {
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

const notificationPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired
  // TODO: extend notification model definition
});

export const propTypes = {
  notification: notificationPropTypes,
  notificationList: PropTypes.arrayOf(notificationPropTypes)
};
