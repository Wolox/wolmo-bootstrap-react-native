import { createReducer, completeReducer, completeState, onSuccess } from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { CurrentUser } from '@interfaces/authInterfaces';
import { Auth, Action } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  currentUser: null,
  initialLoading: true
};

export const initialState: Auth = completeState(stateDescription, ['initialLoading']);

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.AUTH_INIT]: (state: ImmutableObject<Auth>, action: Action<CurrentUser>) =>
      state.merge({ initialLoading: false, [action.target]: action.payload }),
    [actions.LOGOUT]: onSuccess()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
