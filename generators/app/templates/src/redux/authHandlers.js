import React from 'react';
import Immutable from 'seamless-immutable';

import { setCurrentUser } from '../services/AuthService';
import { stringArrayToObject } from '../utils/reduxUtils';

/* ------------- Auth actions ------------- */

export const actions = stringArrayToObject([
  'SIGN_IN',
  'SIGN_IN_SUCCESS',
  'SIGN_IN_FAILURE',
  'SIGN_OUT',
  'AUTH_INIT'
]);

export const actionCreators = {
  init(user) {
    return {
      type: actions.AUTH_INIT,
      payload: { user }
    };
  },
  signIn(authData) {
    return async dispatch => {
      dispatch({ type: actions.SIGN_IN });
      try {
        await setCurrentUser(authData);
        dispatch(actionCreators.signInSuccess(authData));
      } catch (e) {
        dispatch(actionCreators.signInFailure());
      }
    };
  },
  signInSuccess(authData) {
    return {
      type: actions.SIGN_IN_SUCCESS,
      payload: { authData }
    };
  },
  signInFailure() {
    return {
      type: actions.SIGN_IN_FAILURE
    };
  },
  signOut() {
    return {
      type: actions.SIGN_OUT
    };
  }
};

/* ------------- Auth reducer ------------- */
const defaultState = {
  currentUser: null,
  loading: false,
  initialLoading: true
};

/* eslint-disable complexity */
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.AUTH_INIT: {
      return state.merge({ initialLoading: false, currentUser: Immutable(action.payload.user) });
    }
    case actions.SIGN_IN: {
      return state.merge({ loading: true });
    }
    case actions.SIGN_IN_SUCCESS: {
      return state.merge({ loading: false, currentUser: Immutable(action.payload.authData) });
    }
    case actions.SIGN_IN_FAILURE: {
      return state.merge({ loading: false, currentUser: null, err: true });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */

/* ------------- Auth propTypes ------------- */

export function propTypes() {
  return {
    loading: React.PropTypes.bool.isRequired,
    initialLoading: React.PropTypes.bool.isRequired,
    currentUser: React.PropTypes.shape({
      email: React.PropTypes.string.isRequired
    })
  };
}
