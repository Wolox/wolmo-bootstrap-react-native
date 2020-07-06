const { copyFile, copyTemplateFile } = require('../utils');
const { AUTH_SERVICE, ONBOARDING_PATH, ONBOARDING_SERVICE } = require('../files');

const FILES = [ONBOARDING_PATH, ONBOARDING_SERVICE];

const TEMPLATE_FILES = [AUTH_SERVICE];

module.exports = function onBoardingFeatureFiles() {
  if (!this.features.loginandsignup) {
    TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  }
  FILES.forEach(copyFile.bind(this));
};
