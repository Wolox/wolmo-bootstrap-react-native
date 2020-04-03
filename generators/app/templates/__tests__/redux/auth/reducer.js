import { actions } from '@redux/auth/actions';
import authReducer, { initialState } from '@redux/auth/reducer';

describe('testing reducers', () => {
  test('test reducer with AUTH_INIT action', async () => {
    const action = {
      type: actions.AUTH_INIT,
      payload: { id: '', email: '' },
      target: 'currentUser'
    };
    await expect(authReducer(undefined, action)).toEqual({
      ...initialState,
      initialLoading: false,
      currentUser: { id: '', email: '' }
    });
  });
  test('test reducer with LOGOUT action', async () => {
    const action = {
      type: actions.LOGOUT,
      target: 'currentUser'
    };
    await expect(authReducer(undefined, action)).toEqual({
      ...initialState,
      currentUserLoading: false,
      currentUserError: null,
      currentUser: undefined
    });
  });
});
