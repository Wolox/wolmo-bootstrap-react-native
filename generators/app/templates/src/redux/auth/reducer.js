import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import { actions } from './actions';

const defaultState = {
  currentUser: null,
  loading: false,
  initialLoading: true
};

/* eslint-disable complexity */
export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.AUTH_INIT: {
      return state.merge({ initialLoading: false, currentUser: action.payload.user });
    }
    case actions.LOGIN: {
      return state.merge({ loading: true });
    }
    case actions.LOGIN_SUCCESS: {
      return state.merge({ loading: false, currentUser: action.payload.authData });
    }
    case actions.LOGIN_FAILURE: {
      return state.merge({ loading: false, currentUser: null, err: action.payload.err });
    }
    case actions.LOGOUT: {
      return state.merge({ loading: false, currentUser: null });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */

export const propTypes = {
  loading: PropTypes.bool.isRequired,
  initialLoading: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired
    // TODO: Extend user model definition
  })
};
