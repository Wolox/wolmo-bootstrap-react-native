/* eslint-disable id-length */
/* eslint-disable max-statements */
const ora = require('ora');

const packageJsonScripts = require('./packageJsonScripts');
const eslintSetup = require('./eslintSetup');
const baseFilesTemplate = require('./baseFilesTemplate');
const animatedCustomTextInputFeatureFiles = require('./animatedCustomTextInputFeatureFiles');
const iosAppIcons = require('./iosAppIcons');
const androidProjectSetup = require('./androidProjectSetup');
const iosProjectSetup = require('./iosProjectSetup');
const disableLandscapeOrientation = require('./disableLandscapeOrientation');
const pushNotificationsFeatureFiles = require('./pushNotificationsFeatureFiles');
const pushNotificationsSetup = require('./pushNotificationsSetup');
const firebaseCoreFeatureFiles = require('./firebaseCoreFeatureFiles');
const crashlyticsFeatureFiles = require('./crashlyticsFeatureFiles');
const firebaseAnalyticsFeatureFiles = require('./firebaseAnalyticsFeatureFiles');
const loginFeatureFiles = require('./loginFeatureFiles');
const bitriseFeatureFiles = require('./bitriseFeatureFiles');
const enableFullscreen = require('./tabletSetup');
const babelConfigSetup = require('./babelConfigSetup');
const editBundleIdentifier = require('./editBundleIdentifier');
const prettierrcConfigSetup = require('./prettierrcConfigSetup');
const splashScreenSetup = require('./splashScreenSetup');
const firebasePerformanceSetup = require('./firebasePerformanceSetup');

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

  // ----------------     prettierrc setup     ----------------
  prettierrcConfigSetup.bind(this)();

  // ----------------     add react-native-config to app/build.gradle     ----------------
  // ----------------     add react-native-screen to app/build.gradle     ----------------
  // ----------------     add react-native-gesture-handler to MainActivity    ----------------
  androidProjectSetup.bind(this)();

  // ----------------     fix bundle identifier     ----------------
  editBundleIdentifier.bind(this)();
  iosProjectSetup.bind(this)();

  // ----------------     disable landscape orientiation for both android and ios     ----------------
  if (this.features.landscape) {
    disableLandscapeOrientation.bind(this)();
  }

  // ----------------     Splash Screen    ----------------
  splashScreenSetup.bind(this)();

  // ----------------     Features: Login    ----------------
  if (this.features.login) {
    loginFeatureFiles.bind(this)();
  }

  if (this.features.animatedcustomtextinput) {
    animatedCustomTextInputFeatureFiles.bind(this)();
  }

  if (this.features.bitrise) {
    bitriseFeatureFiles.bind(this)();
  }
  // ----------------     Features: Firebase    ----------------
  if (
    this.features.crashlytics ||
    this.features.firebaseanalytics ||
    this.features.pushnotifications ||
    this.features.firebaseperformance
  ) {
    firebaseCoreFeatureFiles.bind(this)();

    if (this.features.crashlytics) {
      crashlyticsFeatureFiles.bind(this)();
    }
    if (this.features.firebaseanalytics) {
      firebaseAnalyticsFeatureFiles.bind(this)();
    }
    if (this.features.pushnotifications) {
      pushNotificationsFeatureFiles.bind(this)();
      pushNotificationsSetup.bind(this)();
    }

    if (this.features.firebaseperformance) {
      firebasePerformanceSetup.bind(this)();
    }
  }

  // --------------- Enables fullscreen on iPad ----------------------------
  enableFullscreen.bind(this)();

  spinner.succeed('Boilerplate ready!');
};
