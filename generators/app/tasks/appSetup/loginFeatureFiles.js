const { copyFile, copyTemplateFile } = require('../../utils');
const {
  AUTH_REDUCER,
  AUTH_ACTIONS,
  AUTH_SERVICE,
  LOGIN,
  LOGIN_LAYOUT,
  LOGIN_STYLE,
  HOME
} = require('../../files');

const FILES = [AUTH_REDUCER, AUTH_ACTIONS, AUTH_SERVICE, LOGIN, LOGIN_LAYOUT, LOGIN_STYLE];
const TEMPLATE_FILES = [HOME];

module.exports = function loginFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
