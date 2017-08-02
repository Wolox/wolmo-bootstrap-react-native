const { copyFile, copyTemplateFile } = require('../../utils');

const REDUX_PATH = 'src/redux';
const SERVICES_PATH = 'src/services';
const SCREENS_PATH = 'src/app/screens';
const LOGIN_PATH = 'src/app/screens/login';

const AUTH_REDUCER = `${REDUX_PATH}/auth/reducer.js`;
const AUTH_ACTIONS = `${REDUX_PATH}/auth/actions.js`;
const AUTH_SERVICE = `${SERVICES_PATH}/AuthService.js`;
const LOGIN = `${LOGIN_PATH}/index.js`;
const LOGIN_LAYOUT = `${LOGIN_PATH}/layout.js`;
const LOGIN_STYLE = `${LOGIN_PATH}/style.js`;

const HOME = `${SCREENS_PATH}/home/layout.js`;

const FILES = [AUTH_REDUCER, AUTH_ACTIONS, AUTH_SERVICE, LOGIN, LOGIN_LAYOUT, LOGIN_STYLE];
const TEMPLATE_FILES = [HOME];

module.exports = function loginFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
