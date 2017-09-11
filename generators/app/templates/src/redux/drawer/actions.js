import { stringArrayToObject } from '../../utils/arrayUtils';

export const actions = stringArrayToObject(['DRAWER_TOGGLED'], '@@DRAWER');

export const actionCreators = {
  drawerToggled(present) {
    return {
      type: actions.DRAWER_TOGGLED,
      payload: { present }
    };
  }
};
