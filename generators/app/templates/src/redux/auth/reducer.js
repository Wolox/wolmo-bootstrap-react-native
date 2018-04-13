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
  primaryActions: [actions.LOGIN],
  override: {
    [actions.AUTH_INIT]: (state, action) =>
      state.merge({ initialLoading: false, [action.target]: action.payload }),
    [actions.LOGOUT]: onSuccess()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));

export const propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired
    // TODO: Extend user model definition
  })
};
