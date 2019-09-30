import { SwitchActions } from 'react-navigation';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import * as AuthService from '@services/AuthService';
import Routes from '@constants/routes';

export const actions = createTypes(completeTypes(['LOGIN'], ['AUTH_INIT', 'LOGOUT']), '@@AUTH');

const loginTarget = 'currentUser';

export const actionCreators = {
  init: user => ({ type: actions.AUTH_INIT, target: loginTarget, payload: user }),
  login: authData => ({
    type: actions.LOGIN,
    target: loginTarget,
    service: AuthService.login,
    payload: authData,
    injections: [
      withPostSuccess((dispatch, response) => {
        dispatch(SwitchActions.jumpTo({ routeName: Routes.App }));
        AuthService.setCurrentUser(response.data);
      })
    ]
  }),
  logout: () => async dispatch => {
    await AuthService.removeCurrentUser();
    dispatch({ type: actions.LOGOUT, target: loginTarget });
    dispatch(SwitchActions.jumpTo({ routeName: Routes.Auth }));
  }
};
