const { copyFile } = require('../../utils');
const {
  PUSH_NOTIFICATIONS_REDUCER,
  PUSH_NOTIFICATIONS_ACTIONS,
  PUSH_NOTIFICATIONS_SERVICE,
  PUSH_NOTIFICATIONS_CONFIG,
  HUAWEI_DEVICES_CONFIG
} = require('../../files');

const FILES = [
  PUSH_NOTIFICATIONS_REDUCER,
  PUSH_NOTIFICATIONS_ACTIONS,
  PUSH_NOTIFICATIONS_SERVICE,
  PUSH_NOTIFICATIONS_CONFIG,
  HUAWEI_DEVICES_CONFIG
];

module.exports = function pushNotificationsFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
