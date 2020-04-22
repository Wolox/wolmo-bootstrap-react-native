import AsyncStorage from '@react-native-community/async-storage';
import api from '@config/api';
import { actionCreators as authActions } from '@redux/auth/actions';
import { setOnBoardingAccess, getOnBoardingAccess } from '@services/OnBoardingService';
// TODO: Adapt returned object to:
//   sessionToken: usually currentUser.access_token
//   renewId: usually currentUser.renew_id
//   Also don't forget to add any relevant user data needed for your app.
const formatUser = currentUser => currentUser;

export const setCurrentUser = currentUser => {
  api.setHeader('Authorization', currentUser.sessionToken);
  return AsyncStorage.setItem('@Auth:currentUser', JSON.stringify(formatUser(currentUser)));
};
export const getCurrentUser = () => AsyncStorage.getItem('@Auth:currentUser').then(JSON.parse);
export const removeCurrentUser = () => AsyncStorage.removeItem('@Auth:currentUser');

export const authSetup = async dispatch => {
  const currentUser = await getCurrentUser();
  const hasAccess = await getOnBoardingAccess();
  if (currentUser) {
    api.setHeader('Authorization', currentUser.sessionToken);
  }
  dispatch(authActions.init(currentUser, hasAccess));
};

export const login = () =>
  // TODO: Implement call to authentication API here
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ ok: true, data: { sessionToken: 'token' } });
    }, 750);
  });
