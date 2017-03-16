import React from 'react';
import Immutable from 'seamless-immutable';
import { NavigationActions } from 'react-navigation';

import { setCurrentUser, removeCurrentUser } from '../services/AuthService';
import { stringArrayToObject } from '../utils/reduxUtils';

/* ------------- Auth actions ------------- */

export const actions = stringArrayToObject([
  'LOGIN',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',
  'LOGOUT',
  'AUTH_INIT'
]);

export const actionCreators = {
  init(user) {
    return {
      type: actions.AUTH_INIT,
      payload: { user }
    };
  },
  login(authData) {
    return async dispatch => {
      // TODO: Call api here
      authData = authData || {};
      authData.sessionToken = 'token';

      dispatch({ type: actions.LOGIN });
      try {
        await setCurrentUser(authData);
        await new Promise(resolve => setTimeout(resolve, 750));
        dispatch(actionCreators.loginSuccess(authData));
        dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
          })
        );
      } catch (e) {
        dispatch(actionCreators.loginFailure(e));
      }
    };
  },
  loginSuccess(authData) {
    return {
      type: actions.LOGIN_SUCCESS,
      payload: { authData }
    };
  },
  loginFailure(err) {
    return {
      type: actions.LOGIN_FAILURE,
      payload: { err }
    };
  },
  logout() {
    return async dispatch => {
      await removeCurrentUser();
      dispatch({ type: actions.LOGOUT });
      dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })]
        })
      );
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
    case actions.LOGIN: {
      return state.merge({ loading: true });
    }
    case actions.LOGIN_SUCCESS: {
      return state.merge({ loading: false, currentUser: Immutable(action.payload.authData) });
    }
    case actions.LOGIN_FAILURE: {
      return state.merge({ loading: false, currentUser: null, err: Immutable(action.payload.err) });
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
