import AsyncStorage from '@react-native-community/async-storage';
import { actionCreators, actions } from '@redux/auth/actions';
import api from '@config/api';

import { store } from '../store';
import { mapActionsToTypes } from '../utils';

describe('testing auth actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  test('test AUTH_INIT', async () => {
    const expectedActions = [actions.AUTH_INIT];
    await store.dispatch(actionCreators.init({}));
    expect(mapActionsToTypes(store.getActions())).toEqual(expectedActions);
  });
  test('test LOGIN SUCCESS AND INJECTIONS', async () => {
    api.setHeader = jest.fn();
    AsyncStorage.setItem = jest.fn().mockReturnValue(null);
    const expectedActions = [actions.LOGIN, actions.LOGIN_SUCCESS, 'Navigation/JUMP_TO'];
    await store.dispatch(actionCreators.login({}));
    expect(mapActionsToTypes(store.getActions())).toEqual(expectedActions);
    expect(api.setHeader.mock.calls).toHaveLength(1);
    expect(AsyncStorage.setItem.mock.calls).toHaveLength(1);
  });
  test('test LOGOUT', async () => {
    AsyncStorage.removeItem = jest.fn().mockReturnValue(null);
    const expectedActions = [actions.LOGOUT, 'Navigation/JUMP_TO'];
    await store.dispatch(actionCreators.logout({}));
    expect(mapActionsToTypes(store.getActions())).toEqual(expectedActions);
    expect(AsyncStorage.removeItem.mock.calls).toHaveLength(1);
  });
});
