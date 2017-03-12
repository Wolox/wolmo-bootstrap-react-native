require('colors');
const ora = require('ora');
const spawn = require('child_process').spawn;

const DEPENDENCIES = [
  'apisauce',
  'react-native-fabric',
  'react-native-renavigate',
  'react-redux',
  'reactotron-apisauce',
  'reactotron-react-native',
  'reactotron-redux',
  'redux',
  'redux-thunk',
  'reselect',
  'seamless-immutable'
];

const DEV_DEPENDENCIES = [
  'babel-eslint',
  'eslint',
  'eslint-config-airbnb',
  'eslint-config-prettier',
  'eslint-plugin-flowtype',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-prettier',
  'eslint-plugin-react',
  'husky',
  'prettier',
  'prettier-eslint',
  'jest-react-native'
];

function installDependencies(projectName, deps, options, dev) {

  var runCommand = require('./runCommand');

    const yarnArgs = dev ? ['add', '--dev'].concat(deps) : ['add'].concat(deps)

    return runCommand({
      command: ['yarn', yarnArgs, { cwd: `${process.cwd()}/${projectName}` }],
      loadingMessage: `Fetching ${dev ? 'dev dependencies' : 'dependencies'}`,
      successMessage: `${dev ? 'Dev dependencies' : 'Dependencies'} ready!`,
      failureMessage: `${dev ? 'Dev dependencies' : 'Dependencies'} installation failed. Turn verbose mode on for detailed logging`,
      context: options
    });
  }

module.exports = function() {
  return installDependencies(this.projectName, DEPENDENCIES, this.options).then(() => {
    return installDependencies(this.projectName, DEV_DEPENDENCIES, this.options, true);
  }).catch(() => {
    process.exit(1);
  });
}
