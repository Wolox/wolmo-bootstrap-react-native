const { copyFile } = require('../utils');
const { AUTH_INTERFACES, AUTH_PATH, AUTH_SERVICE, TESTS_AUTH_PATH, TESTS_UTILS } = require('../files');

const FILES = [AUTH_INTERFACES, AUTH_PATH, TESTS_AUTH_PATH, TESTS_UTILS, AUTH_SERVICE];

module.exports = function loginAndSignUpFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
