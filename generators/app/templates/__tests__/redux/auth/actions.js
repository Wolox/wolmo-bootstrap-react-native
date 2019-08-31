import { actionCreators, actions } from '@redux/auth/actions';
import api from '@config/api';
import AsyncStorage from '@react-native-community/async-storage';

import { store } from '../store';

describe('testing auth actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  test('test AUTH_INIT', async () => {
    const expectedActions = [{ type: actions.AUTH_INIT, target: 'currentUser', payload: {} }];
    await store.dispatch(actionCreators.init({}));
    expect(store.getActions()).toEqual(expectedActions);
  });
  test('test LOGIN SUCCESS AND INJECTIONS', async () => {
    api.setHeader = jest.fn();
    AsyncStorage.setItem = jest.fn().mockReturnValue(null);
    const expectedActions = [
      { type: actions.LOGIN, target: 'currentUser' },
      { type: actions.LOGIN_SUCCESS, target: 'currentUser', payload: { sessionToken: 'token' } },
      {
        actions: [
          {
            routeName: 'Home',
            type: 'Navigation/NAVIGATE'
          }
        ],
        index: 0,
        key: null,
        type: 'Navigation/RESET'
      }
    ];
    await store.dispatch(actionCreators.login({}));
    expect(store.getActions()).toEqual(expectedActions);
    expect(api.setHeader.mock.calls).toHaveLength(1);
    expect(AsyncStorage.setItem.mock.calls).toHaveLength(1);
  });
  test('test LOGOUT', async () => {
    AsyncStorage.removeItem = jest.fn().mockReturnValue(null);
    const expectedActions = [
      { type: actions.LOGOUT, target: 'currentUser' },
      {
        actions: [
          {
            routeName: 'Login',
            type: 'Navigation/NAVIGATE'
          }
        ],
        index: 0,
        key: null,
        type: 'Navigation/RESET'
      }
    ];
    await store.dispatch(actionCreators.logout({}));
    expect(store.getActions()).toEqual(expectedActions);
    expect(AsyncStorage.removeItem.mock.calls).toHaveLength(1);
  });
});
