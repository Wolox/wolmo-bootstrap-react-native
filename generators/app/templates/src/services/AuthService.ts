import { Dispatch } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '@config/api';
import { actionCreators as authActions } from '@redux/auth/actions';
import { CurrentUser } from '@interfaces/authInterfaces';

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

export const login = () =>
  // TODO: Implement call to authentication API here
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ ok: true, data: { sessionToken: 'token' } });
    }, 750);
  });
