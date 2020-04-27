const { copyFile, copyTemplateFile } = require('../../utils');
const {
  UTILS_PATH,
  REACT_NATIVE_CONFIG,
  JENKINS_FILE,
  DOCKER_FILE,
  CI_CONFIG_FILE,
  PULL_REQUEST_TEMPLATE,
  FONTS,
  API_CONFIG,
  CONFIG,
  MAIN,
  APP_NAVIGATOR_NAVIGATOR,
  CUSTOM_TEXT_PATH,
  CUSTOM_BUTTON_PATH,
  CUSTOM_TEXT_INPUT_PATH,
  LOADABLE_PATH,
  PLATFORM_CONSTANTS,
  COLORS_CONSTANTS,
  ROUTES_CONSTANTS,
  FONTS_CONSTANTS,
  STATUS_BAR_CONSTANTS,
  TEST_ESLINT_CONFIG,
  FONTS_CONFIG,
  HOME_STYLES,
  README,
  REDUX_STORE,
  REACTOTRON_CONFIG,
  I18N_CONFIG,
  INDEX,
  APP,
  NAVIGATION_CONFIG,
  APP_I18N,
  IOS_PATH,
  MOCKS,
  TESTS_STORE,
  TESTS_SETUP_ENZYME,
  TESTS_RESPONSES_EXAMPLES,
  TSCONFIG_FILE,
  INDEX_D_FILE,
  ESLINTRC_FILE,
  ESLINT_IGNORE_FILE,
  JEST_CONFIG_FILE,
  NAVIGATION_HELPER,
  APP_NAVIGATOR,
  AUTH_ACTIONS,
  AUTH_REDUCER,
  AUTH_SERVICE
} = require('../../files');

const FILES = [
  UTILS_PATH,
  REACT_NATIVE_CONFIG,
  JENKINS_FILE,
  DOCKER_FILE,
  PULL_REQUEST_TEMPLATE,
  FONTS,
  API_CONFIG,
  CONFIG,
  CUSTOM_TEXT_PATH,
  CUSTOM_BUTTON_PATH,
  CUSTOM_TEXT_INPUT_PATH,
  LOADABLE_PATH,
  PLATFORM_CONSTANTS,
  COLORS_CONSTANTS,
  FONTS_CONSTANTS,
  STATUS_BAR_CONSTANTS,
  I18N_CONFIG,
  FONTS_CONFIG,
  TEST_ESLINT_CONFIG,
  HOME_STYLES,
  IOS_PATH,
  MOCKS,
  TESTS_STORE,
  TESTS_SETUP_ENZYME,
  TESTS_RESPONSES_EXAMPLES,
  TSCONFIG_FILE,
  ESLINT_IGNORE_FILE,
  JEST_CONFIG_FILE,
  NAVIGATION_HELPER,
  APP_NAVIGATOR
];

const TEMPLATE_FILES = [
  README,
  REDUX_STORE,
  ROUTES_CONSTANTS,
  REACTOTRON_CONFIG,
  INDEX,
  APP,
  APP_NAVIGATOR_NAVIGATOR,
  NAVIGATION_CONFIG,
  APP_I18N,
  CI_CONFIG_FILE,
  MAIN,
  INDEX_D_FILE,
  ESLINTRC_FILE,
  AUTH_ACTIONS,
  AUTH_REDUCER,
  AUTH_SERVICE
];

module.exports = function baseFilesTemplate() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));

  this.fs.copyTpl(
    this.templatePath('src', 'app', 'screens', 'Home', this.features.login ? 'index.js' : 'layout.ejs'),
    this.destinationPath(this.projectName, 'src', 'app', 'screens', 'Home', 'index.js'),
    { projectName: this.projectName, features: this.features }
  );
};
