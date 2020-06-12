const { copyFile } = require('../utils');
const { PUSH_NOTIFICATIONS_CONFIG } = require('../files');

const FILES = [PUSH_NOTIFICATIONS_CONFIG];

module.exports = function pushNotificationsFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
