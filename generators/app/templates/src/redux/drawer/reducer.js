import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';
import { createReducer, onToggle } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  present: false
};

const reducerDescription = {
  [actions.DRAWER_TOGGLED]: onToggle()
};

export default createReducer(Immutable(initialState), reducerDescription);

export const propTypes = {
  present: PropTypes.bool.isRequired
};
