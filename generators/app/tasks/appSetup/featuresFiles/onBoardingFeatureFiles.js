const { copyFile } = require('../utils');
const { ONBOARDING_PATH } = require('../files');

const FILES = [ONBOARDING_PATH];

module.exports = function onBoardingFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
