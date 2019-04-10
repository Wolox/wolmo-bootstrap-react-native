const { copyFile, copyTemplateFile } = require('../../utils');
const {
  AUTH_REDUCER,
  AUTH_ACTIONS,
  AUTH_SERVICE,
  HOME,
  INITIAL_LOADING,
  LOGIN,
  LOGIN_LAYOUT,
  LOGIN_STYLE,
  LOGIN_I18N
} = require('../../files');

const FILES = [
  AUTH_REDUCER,
  AUTH_ACTIONS,
  AUTH_SERVICE,
  INITIAL_LOADING,
  LOGIN,
  LOGIN_LAYOUT,
  LOGIN_STYLE,
  LOGIN_I18N
];
const TEMPLATE_FILES = [HOME];

module.exports = function loginFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
