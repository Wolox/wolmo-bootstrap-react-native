const { copyFile } = require('../../utils');
const { ANALYTICS_MIDDLEWARE } = require('../../files');

const FILES = [ANALYTICS_MIDDLEWARE];

module.exports = function googleAnalyticsFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
