const runCommand = require('./runCommand');

const DEPENDENCIES = [
  'apisauce',
  'react-navigation',
  'react-redux',
  'reactotron-apisauce',
  'reactotron-react-native',
  'reactotron-redux',
  'redux',
  'redux-thunk',
  'reselect',
  'seamless-immutable',
  'react-native-dotenv'
];

const DEV_DEPENDENCIES = [
  'babel-eslint',
  'babel-preset-react-native',
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

function yarnInstall(projectName, deps, options, dev) {
  const yarnArgs = dev ? ['add', '--dev'].concat(deps) : ['add'].concat(deps);

  return runCommand({
    command: ['yarn', yarnArgs, { cwd: `${process.cwd()}/${projectName}` }],
    loadingMessage: `Fetching ${dev ? 'dev dependencies' : 'dependencies'}`,
    successMessage: `${dev ? 'Dev dependencies' : 'Dependencies'} ready!`,
    failureMessage: `${dev
      ? 'Dev dependencies'
      : 'Dependencies'} installation failed. Turn verbose mode on for detailed logging`,
    context: options
  });
}

module.exports = function installDependencies() {
  if (this.features.pushnotifications) {
    DEPENDENCIES.push('react-native-push-notification');
    DEPENDENCIES.push('react-native-huawei-protected-apps');
  }
  if (this.features.drawerios || this.features.drawerandroid) {
    DEPENDENCIES.push('react-native-drawer');
  }
  return yarnInstall(this.projectName, DEPENDENCIES, this.options)
    .then(() => yarnInstall(this.projectName, DEV_DEPENDENCIES, this.options, true))
    .catch(() => {
      process.exit(1);
    });
};
