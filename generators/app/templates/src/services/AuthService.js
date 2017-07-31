import { AsyncStorage } from 'react-native';

import api from '../config/api';
import { actionCreators as authActions } from '../redux/authHandlers';

export const setCurrentUser = async currentUser => {
  api.setHeader('Authorization', currentUser.sessionToken);
  return AsyncStorage.setItem('@Auth:currentUser', JSON.stringify(currentUser));
};
export const getCurrentUser = async () => AsyncStorage.getItem('@Auth:currentUser').then(JSON.parse);
export const removeCurrentUser = async () => AsyncStorage.removeItem('@Auth:currentUser');

export const authSetup = async dispatch => {
  const currentUser = await getCurrentUser();
  dispatch(authActions.init(currentUser));
};
