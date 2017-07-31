import { NavigationActions } from 'react-navigation';

import * as AuthService from '../../services/AuthService';
import { stringArrayToObject } from '../../utils/reduxUtils';

export const actions = stringArrayToObject(
  ['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGOUT', 'AUTH_INIT'],
  '@@AUTH'
);

const privateActionCreators = {
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
  }
};

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
        await AuthService.setCurrentUser(authData);
        await new Promise(resolve => setTimeout(resolve, 750));
        dispatch(privateActionCreators.loginSuccess(authData));
        dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })]
          })
        );
      } catch (e) {
        dispatch(privateActionCreators.loginFailure(e));
      }
    };
  },
  logout() {
    return async dispatch => {
      await AuthService.removeCurrentUser();
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
