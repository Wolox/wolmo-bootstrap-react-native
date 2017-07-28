import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import { stringArrayToObject } from '../utils/reduxUtils';

/* ------------- Drawer actions' name ------------- */

export const actions = stringArrayToObject(['DRAWER_TOGGLED']);

export const actionCreators = {
  drawerToggled(present) {
    return {
      type: actions.DRAWER_TOGGLED,
      payload: { present }
    };
  }
};

/* ------------- Drawer reducer ------------- */

export function reducer(state = Immutable({ present: false }), action) {
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

/* ------------- Drawer propTypes ------------- */

export const propTypes = {
  present: PropTypes.bool.isRequired
};
