import { Dispatch } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ApiResponse } from 'apisauce';
import api from '@config/api';
import { CurrentUser, AuthData } from '@interfaces/authInterfaces';
import { actionCreators as authActions } from '@redux/auth/actions';

// TODO: Adapt returned object to:
//   sessionToken: usually currentUser.access_token
//   renewId: usually currentUser.renew_id
//   Also don't forget to add any relevant user data needed for your app.
const formatUser = (currentUser: CurrentUser) => currentUser;

export const setCurrentUser = (currentUser: CurrentUser) => {
  api.setHeader('Authorization', currentUser.sessionToken);
  return AsyncStorage.setItem('@Auth:currentUser', JSON.stringify(formatUser(currentUser)));
};
export const getCurrentUser = () =>
  AsyncStorage.getItem('@Auth:currentUser').then(value => JSON.parse(`${value}`));
export const removeCurrentUser = () => AsyncStorage.removeItem('@Auth:currentUser');

export const authSetup = async (dispatch: Dispatch<any>) => {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    api.setHeader('Authorization', currentUser.sessionToken);
  }
  dispatch(authActions.init(currentUser));
};

export const login = (authData: AuthData) => {
  // TODO: Implement call to authentication API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: CLIENT_ERROR,
  //   originalError: e.message
  // }) as Promise<ApiErrorResponse<any>>;
  console.log(JSON.stringify(authData));
  return setTimeout(
    () =>
      Promise.resolve({
        ok: true,
        problem: null,
        originalError: null,
        data: { sessionToken: 'token' }
      }) as Promise<ApiResponse<any, any>>,
    750
  );
};
