const { copyFile, copyTemplateFile } = require('../../utils');
const {
  AUTH_REDUX_PATH,
  AUTH_SERVICE,
  HOME,
  INITIAL_LOADING_PATH,
  LOGIN_PATH,
  TESTS_AUTH_PATH,
  TESTS_LOGIN_SCREEN_PATH,
  TESTS_UTILS
} = require('../../files');

const FILES = [
  AUTH_REDUX_PATH,
  AUTH_SERVICE,
  INITIAL_LOADING_PATH,
  LOGIN_PATH,
  TESTS_AUTH_PATH,
  TESTS_LOGIN_SCREEN_PATH,
  TESTS_UTILS
];
const TEMPLATE_FILES = [HOME];

module.exports = function loginFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
