import { stringArrayToObject } from '../../utils/reduxUtils';

export const actions = stringArrayToObject(['DRAWER_TOGGLED'], '@@DRAWER');

export const actionCreators = {
  drawerToggled(present) {
    return {
      type: actions.DRAWER_TOGGLED,
      payload: { present }
    };
  }
};
