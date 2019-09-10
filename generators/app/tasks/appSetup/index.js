const ora = require('ora');

const packageJsonScripts = require('./packageJsonScripts');
const eslintSetup = require('./eslintSetup');
const baseFilesTemplate = require('./baseFilesTemplate');
const iosAppIcons = require('./iosAppIcons');
const androidProjectSetup = require('./androidProjectSetup');
const iosProjectSetup = require('./iosProjectSetup');
const disableLandscapeOrientation = require('./disableLandscapeOrientation');
const pushNotificationsFeatureFiles = require('./pushNotificationsFeatureFiles');
const googleAnalyticsFeatureFiles = require('./googleAnalyticsFeatureFiles');
const loginFeatureFiles = require('./loginFeatureFiles');
const enableFullscreen = require('./tabletSetup');
const babelConfigSetup = require('./babelConfigSetup');
const editBundleIdentifier = require('./editBundleIdentifier');

module.exports = function index() {
  const spinner = ora({
    spinner: 'bouncingBall',
    text: 'Creating project boilerplate'
  }).start();

  // ----------------     add package.json scripts     ----------------
  packageJsonScripts.bind(this)();

  // ----------------     eslint config file     ----------------
  eslintSetup.bind(this)();

  // ----------------     base app files     ----------------
  baseFilesTemplate.bind(this)();

  // ----------------     ios app icons     ----------------
  iosAppIcons.bind(this)();

  // ----------------     babelrc setup     ----------------
  babelConfigSetup.bind(this)();

  // ----------------     add react-native-config to app/build.gradle     ----------------
  // ----------------     add react-native-screen to app/build.gradle     ----------------
  // ----------------     add react-native-gesture-handler to MainActivity    ----------------
  androidProjectSetup.bind(this)();

  // ----------------     fix bundle identifier     ----------------
  editBundleIdentifier.bind(this)();
  iosProjectSetup.bind(this)();

  if (this.features.landscape) {
    // ----------------     disable landscape orientiation for both android and ios     ----------------
    disableLandscapeOrientation.bind(this)();
  }

  // ----------------     features     ----------------
  if (this.features.pushnotifications) {
    pushNotificationsFeatureFiles.bind(this)();
  }
  if (this.features.login) {
    loginFeatureFiles.bind(this)();
  }
  if (this.features.googleanalytics) {
    googleAnalyticsFeatureFiles.bind(this)();
  }

  // --------------- Enables fullscreen on iPad ----------------------------
  enableFullscreen.bind(this)();

  spinner.succeed('Boilerplate ready!');
};
