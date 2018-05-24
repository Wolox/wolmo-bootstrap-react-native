import { createTypes } from 'redux-recompose';

export const actions = createTypes(['DRAWER_TOGGLED'], '@@DRAWER');

export const actionCreators = {
  drawerToggled: isPresent => ({
    type: actions.DRAWER_TOGGLED,
    target: 'present',
    payload: isPresent
  })
};
