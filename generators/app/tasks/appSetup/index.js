/* eslint-disable id-length */
/* eslint-disable max-statements */
const ora = require('ora');

const packageJsonScripts = require('./packageJsonScripts');
const eslintSetup = require('./eslintSetup');
const baseFilesTemplate = require('./baseFilesTemplate');
const appIcons = require('./appIcons');
const androidProjectSetup = require('./androidProjectSetup');
const createDotEnvFilesLocally = require('./createDotEnvFilesLocally');
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
const cleanTargetsFromPods = require('./cleanTargetsFromPods');
const prettierrcConfigSetup = require('./prettierrcConfigSetup');
const splashScreenSetup = require('./splashScreenSetup');
const firebasePerformanceSetup = require('./firebasePerformanceSetup');

module.exports = function index() {
  const spinner = ora({
    spinner: 'bouncingBall',
    text: 'Creating project boilerplate'
  }).start();

  // ----------------     add envs files     ----------------
  createDotEnvFilesLocally.bind(this)();

  // ----------------     add package.json scripts     ----------------
  packageJsonScripts.bind(this)();

  // ----------------     eslint config file     ----------------
  eslintSetup.bind(this)();

  // ----------------     base app files     ----------------
  baseFilesTemplate.bind(this)();

  // ----------------     app icons     ----------------
  appIcons.bind(this)();

  // ----------------     babelrc setup     ----------------
  babelConfigSetup.bind(this)();

  // ----------------     prettierrc setup     ----------------
  prettierrcConfigSetup.bind(this)();

  // ----------------     add Android project configurationn    ----------------
  androidProjectSetup.bind(this)();

  // ----------------     add iOS project configuration and clean unused targets    ----------------
  iosProjectSetup.bind(this)();
  cleanTargetsFromPods.bind(this)();

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

  // ----------------     Features: Bitrise    ----------------
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
