const CONFIG_PATH = 'src/config';
const REDUX_PATH = 'src/redux';
const APP_PATH = 'src/app';
const UTILS_PATH = 'src/utils';
const APP_NAVIGATOR_PATH = 'src/app/components/AppNavigator';
const SCREENS_PATH = 'src/app/screens';
const TEST_PATH = 'test';
const HOME_PATH = `${SCREENS_PATH}/home`;

const CIRCLE_CONFIG = 'circle.yml';
const PULL_REQUEST_TEMPLATE = 'pull_request_template.md';
const API_CONFIG = `${CONFIG_PATH}/api.js`;
const CONFIG = `${CONFIG_PATH}/index.js`;
const MAIN = 'main.js';
const APP_NAVIGATOR = `${APP_NAVIGATOR_PATH}/index.js`;
const CONSTANTS = `${UTILS_PATH}/constants.js`;
const REDUX_UTILS = `${UTILS_PATH}/reduxUtils.js`;
const COLORS = `${UTILS_PATH}/colors.js`;
const REDUX_UTILS_TESTS = `${TEST_PATH}/utils/reduxUtils.spec.js`;
const TEST_ESLINT_CONFIG = `${TEST_PATH}/.eslintrc.js`;

const README = 'README.md';
const REDUX_STORE = `${REDUX_PATH}/store.js`;
const REACTOTRON_CONFIG = `${CONFIG_PATH}/ReactotronConfig.js`;
const ANDROID_INDEX = 'index.android.js';
const IOS_INDEX = 'index.ios.js';
const APP = `${APP_PATH}/index.js`;
const SCREENS = `${APP_PATH}/screens.js`;
const HOME_STYLES = `${HOME_PATH}/styles.js`;

const FILES = [
  CIRCLE_CONFIG,
  PULL_REQUEST_TEMPLATE,
  API_CONFIG,
  CONFIG,
  MAIN,
  APP_NAVIGATOR,
  CONSTANTS,
  REDUX_UTILS,
  COLORS,
  REDUX_UTILS_TESTS,
  TEST_ESLINT_CONFIG,
  HOME_STYLES
];

const TEMPLATE_FILES = [README, REDUX_STORE, REACTOTRON_CONFIG, ANDROID_INDEX, IOS_INDEX, APP, SCREENS];

module.exports = function baseFilesTemplate() {
  TEMPLATE_FILES.forEach(filepath => {
    const filepathWithoutExtension = filepath.substring(0, filepath.lastIndexOf('.'));
    const templatePath = `${filepathWithoutExtension}.ejs`;
    this.fs.copyTpl(
      this.templatePath(...templatePath.split('/')),
      this.destinationPath(this.projectName, ...filepath.split('/')),
      { projectName: this.projectName, features: this.features }
    );
  });

  FILES.forEach(filepath => {
    this.fs.copy(
      this.templatePath(...filepath.split('/')),
      this.destinationPath(this.projectName, ...filepath.split('/'))
    );
  });

  this.fs.copyTpl(
    this.templatePath('src', 'app', 'screens', 'home', this.features.login ? 'index.js' : 'layout.ejs'),
    this.destinationPath(this.projectName, 'src', 'app', 'screens', 'home', 'index.js'),
    { projectName: this.projectName, features: this.features }
  );
};
