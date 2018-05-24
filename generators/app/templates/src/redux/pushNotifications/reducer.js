import { createReducer, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import { actions } from './actions';

const initialState = {
  unreadNotifications: [],
  readNotifications: [],
  token: null
};

const reducerDescription = {
  [actions.REGISTER]: onReadValue(),
  [actions.NOTIFICATION_RECEIVED]: (state, action) => {
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
};

export default createReducer(Immutable(initialState), reducerDescription);

const notificationPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired
  // TODO: extend notification model definition
});

export const propTypes = {
  notification: notificationPropTypes,
  notificationList: PropTypes.arrayOf(notificationPropTypes)
};
