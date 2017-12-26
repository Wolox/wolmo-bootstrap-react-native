const { copyFile } = require('../../utils');
const { ANALYTICS_SERVICE } = require('../../files');

const FILES = [ANALYTICS_SERVICE];

module.exports = function googleAnalyticsFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
