const { copyFile } = require('../utils');
const { ONBOARDING_PATH, ONBOARDING_SERVICE } = require('../files');

const FILES = [ONBOARDING_PATH, ONBOARDING_SERVICE];

module.exports = function onBoardingFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
