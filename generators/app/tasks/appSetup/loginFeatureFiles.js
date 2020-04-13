const { copyFile, copyTemplateFile } = require('../../utils');
const {
  AUTH_ACTIONS,
  AUTH_REDUCER,
  AUTH_SERVICE,
  HOME,
  LOGIN_PATH,
  TESTS_AUTH_PATH,
  TESTS_LOGIN_SCREEN_PATH,
  TESTS_UTILS
} = require('../../files');

const FILES = [AUTH_REDUCER, AUTH_SERVICE, LOGIN_PATH, TESTS_AUTH_PATH, TESTS_LOGIN_SCREEN_PATH, TESTS_UTILS];
const TEMPLATE_FILES = [HOME, AUTH_ACTIONS];

module.exports = function loginFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
