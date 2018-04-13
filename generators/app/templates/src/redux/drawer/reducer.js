import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';
import { createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  present: false
};

const reducerDescription = {
  [actions.DRAWER_TOGGLED]: (state, action) =>
    state.merge({ [action.target]: action.payload || !state[action.target] })
};

export default createReducer(Immutable(initialState), reducerDescription);

export const propTypes = {
  present: PropTypes.bool.isRequired
};
