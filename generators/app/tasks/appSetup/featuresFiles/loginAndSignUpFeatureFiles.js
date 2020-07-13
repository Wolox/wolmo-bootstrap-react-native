const { copyFile, copyTemplateFile } = require('../utils');
const { AUTH_INTERFACES, AUTH_PATH, AUTH_SERVICE, TESTS_AUTH_PATH, TESTS_UTILS } = require('../files');

const FILES = [AUTH_INTERFACES, AUTH_PATH, TESTS_AUTH_PATH, TESTS_UTILS];

const TEMPLATE_FILES = [AUTH_SERVICE];

module.exports = function loginAndSignUpFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
