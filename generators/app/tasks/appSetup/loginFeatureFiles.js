const { copyFile, copyTemplateFile } = require('../../utils');
const {
  AUTH_ACTIONS,
  AUTH_REDUCER,
  AUTH_SERVICE,
  LOGIN_PATH,
  TESTS_AUTH_PATH,
  TESTS_LOGIN_SCREEN_PATH,
  TESTS_UTILS,
  AUTH_INTERFACES,
  WITH_FORM_PATH
} = require('../../files');

const FILES = [
  AUTH_REDUCER,
  AUTH_SERVICE,
  LOGIN_PATH,
  TESTS_AUTH_PATH,
  TESTS_LOGIN_SCREEN_PATH,
  TESTS_UTILS,
  AUTH_INTERFACES,
  WITH_FORM_PATH
];
const TEMPLATE_FILES = [AUTH_ACTIONS];

module.exports = function loginFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
