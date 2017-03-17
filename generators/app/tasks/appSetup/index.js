const ora = require('ora');

const packageJsonScripts = require('./packageJsonScripts');
const eslintSetup = require('./eslintSetup');
const baseFilesTemplate = require('./baseFilesTemplate');
const fixBundleIdentifier = require('./fixBundleIdentifier');
const pushNotificationsFeatureFiles = require('./pushNotificationsFeatureFiles');
const loginFeatureFiles = require('./loginFeatureFiles');
const drawerFeatureFiles = require('./drawerFeatureFiles');

module.exports = function index() {
  const spinner = ora({ spinner: 'bouncingBall', text: 'Creating project boilerplate' }).start();

  // ----------------     add package.json scripts     ----------------
  packageJsonScripts.bind(this)();

  // ----------------     eslint config file     ----------------
  eslintSetup.bind(this)();

  // ----------------     base app files     ----------------
  baseFilesTemplate.bind(this)();

  // ----------------     fix bundle identifier     ----------------
  fixBundleIdentifier.bind(this)();

  // ----------------     features     ----------------
  if (this.features.pushnotifications) {
    pushNotificationsFeatureFiles.bind(this)();
  }
  if (this.features.login) {
    loginFeatureFiles.bind(this)();
  }
  if (this.features.drawerios || this.features.drawerandroid) {
    drawerFeatureFiles.bind(this)();
  }

  spinner.succeed('Boilerplate ready!');
};
