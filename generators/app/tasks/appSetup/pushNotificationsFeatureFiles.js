const { copyFile } = require('../../utils');

const REDUX_PATH = 'src/redux';
const CONFIG_PATH = 'src/config';
const SERVICES_PATH = 'src/services';

const PUSH_NOTIFICATIONS_REDUCER = `${REDUX_PATH}/pushNotifications/reducer.js`;
const PUSH_NOTIFICATIONS_ACTIONS = `${REDUX_PATH}/pushNotifications/actions.js`;
const PUSH_NOTIFICATIONS_SERVICE = `${SERVICES_PATH}/PushNotificationsService.js`;
const PUSH_NOTIFICATIONS_CONFIG = `${CONFIG_PATH}/PushNotifications.js`;
const HUAWEI_DEVICES_CONFIG = `${CONFIG_PATH}/HuaweiPushNotifications.js`;

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
