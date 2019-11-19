const { copyFile, copyTemplateFile } = require('../../utils');
const {
  AUTH_REDUCER,
  AUTH_ACTIONS,
  AUTH_SERVICE,
  HOME,
  LOGIN,
  LOGIN_LAYOUT,
  LOGIN_STYLE,
  LOGIN_I18N,
  TESTS_AUTH_ACTIONS,
  TESTS_AUTH_REDUCER,
  TESTS_LOGIN_SCREEN_TEST,
  TESTS_UTILS
} = require('../../files');

const FILES = [
  AUTH_REDUCER,
  AUTH_SERVICE,
  LOGIN,
  LOGIN_LAYOUT,
  LOGIN_STYLE,
  LOGIN_I18N,
  TESTS_AUTH_ACTIONS,
  TESTS_AUTH_REDUCER,
  TESTS_LOGIN_SCREEN_TEST,
  TESTS_UTILS
];
const TEMPLATE_FILES = [HOME, AUTH_ACTIONS];

module.exports = function loginFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
