/* eslint-disable complexity */
const ora = require('ora');

const installPods = require('../installPods');

const packageJsonScripts = require('./packageJsonScripts');
const eslintSetup = require('./eslintSetup');
const baseFilesTemplate = require('./baseFilesTemplate');
const iosAppIcons = require('./iosAppIcons');
const androidProjectSetup = require('./androidProjectSetup');
const iosProjectSetup = require('./iosProjectSetup');
const disableLandscapeOrientation = require('./disableLandscapeOrientation');
const pushNotificationsFeatureFiles = require('./pushNotificationsFeatureFiles');
const firebaseCoreFeatureFiles = require('./firebaseCoreFeatureFiles');
const crashlyticsFeatureFiles = require('./crashlyticsFeatureFiles');
const googleAnalyticsFeatureFiles = require('./googleAnalyticsFeatureFiles');
const loginFeatureFiles = require('./loginFeatureFiles');
const bitriseFeatureFiles = require('./bitriseFeatureFiles');
const onBoardingFeatureFiles = require('./onBoardingFeatureFiles');
const enableFullscreen = require('./tabletSetup');
const babelConfigSetup = require('./babelConfigSetup');
const editBundleIdentifier = require('./editBundleIdentifier');
const prettierrcConfigSetup = require('./prettierrcConfigSetup');
const splashScreenSetup = require('./splashScreenSetup');

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

  if (this.features.bitrise) {
    bitriseFeatureFiles.bind(this)();
  }
  if (this.features.onboarding) {
    onBoardingFeatureFiles.bind(this)();
  }
  // ----------------     Features: Firebase    ----------------
  if (this.features.crashlytics || this.features.googleanalytics || this.features.pushnotifications) {
    firebaseCoreFeatureFiles.bind(this)();

    if (this.features.crashlytics) {
      crashlyticsFeatureFiles.bind(this)();
    }
    if (this.features.googleanalytics) {
      googleAnalyticsFeatureFiles.bind(this)();
    }
    if (this.features.pushnotifications) {
      pushNotificationsFeatureFiles.bind(this)();
    }

    installPods.bind(this)();
  }

  // --------------- Enables fullscreen on iPad ----------------------------
  enableFullscreen.bind(this)();

  spinner.succeed('Boilerplate ready!');
};
