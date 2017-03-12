const ora = require('ora');

const packageJsonScripts = require('./packageJsonScripts');
const eslintSetup = require('./eslintSetup');
const baseFiles = require('./baseFiles');
const fixBundleIdentifier = require('./fixBundleIdentifier');

module.exports = function () {
  const spinner = ora({ spinner: 'bouncingBall', text: 'Creating project boilerplate' }).start();

  // ----------------     add package.json scripts     ----------------
  packageJsonScripts.bind(this)();

  // ----------------     eslint config file     ----------------
  eslintSetup.bind(this)();

  // ----------------     base app files     ----------------
  baseFiles.bind(this)();

  // ----------------     fix bundle identifier     ----------------
  fixBundleIdentifier.bind(this)();

  spinner.succeed('Boilerplate ready!');
}
