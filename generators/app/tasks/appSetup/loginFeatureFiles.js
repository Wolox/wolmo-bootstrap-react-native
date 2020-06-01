const { copyFile } = require('../../utils');
const {
  AUTH_INTERFACES,
  LOGIN_PATH,
  TESTS_AUTH_PATH,
  TESTS_LOGIN_SCREEN_PATH,
  TESTS_UTILS
} = require('../../files');

const FILES = [AUTH_INTERFACES, LOGIN_PATH, TESTS_AUTH_PATH, TESTS_LOGIN_SCREEN_PATH, TESTS_UTILS];

module.exports = function loginFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};
