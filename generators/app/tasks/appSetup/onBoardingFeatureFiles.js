const { copyFile } = require('../../utils');
const { ONBOARDING_PATH, INITIAL_LOADING_SERVICE } = require('../../files');

const FILES = [ONBOARDING_PATH, INITIAL_LOADING_SERVICE];

module.exports = function onBoardingFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
