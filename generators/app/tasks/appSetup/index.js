const ora = require('ora');

const packageJsonScripts = require('./packageJsonScripts');
const eslintSetup = require('./eslintSetup');
const baseFilesTemplate = require('./baseFilesTemplate');
const fixBundleIdentifier = require('./fixBundleIdentifier');
const pushNotificationsSetup = require('./pushNotificationsSetup');

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
    pushNotificationsSetup.bind(this)();
  }

  spinner.succeed('Boilerplate ready!');
};
