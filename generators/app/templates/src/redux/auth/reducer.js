import { createReducer, completeReducer, completeState, onSuccess } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import { actions } from './actions';

const stateDescription = {
  currentUser: null,
  initialLoading: true
};

const initialState = completeState(stateDescription, ['initialLoading']);

const reducerDescription = {
  primaryActions: [actions.LOGIN, actions.LOGOUT],
  override: {
    [actions.AUTH_INIT]: (state, action) =>
      state.merge({ initialLoading: false, currentUser: action.payload.user }),
    [actions.LOGOUT]: (state, action) =>
      state.merge({ [action.target]: null, [`${action.target}Loading`]: false })
  }
};

// export default function reducer(state = Immutable(defaultState), action) {
//   switch (action.type) {
//     case actions.AUTH_INIT: {
//       return state.merge({ initialLoading: false, currentUser: action.payload.user });
//     }
//     case actions.LOGIN: {
//       return state.merge({ loading: true });
//     }
//     case actions.LOGIN_SUCCESS: {
//       return state.merge({ loading: false, currentUser: action.payload.authData });
//     }
//     case actions.LOGIN_FAILURE: {
//       return state.merge({ loading: false, currentUser: null, err: action.payload.err });
//     }
//     case actions.LOGOUT: {
//       return state.merge({ loading: false, currentUser: null });
//     }
//     default: {
//       return state;
//     }
//   }
// }

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));

export const propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired
    // TODO: Extend user model definition
  })
};
