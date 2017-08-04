import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import { actions } from './actions';

export default function reducer(state = Immutable({ present: false }), action) {
  switch (action.type) {
    case actions.DRAWER_TOGGLED: {
      const present =
        !action.payload || action.payload.present === undefined ? !state.present : action.payload.present;
      return state.merge({ present });
    }
    default: {
      return state;
    }
  }
}

export const propTypes = {
  present: PropTypes.bool.isRequired
};
