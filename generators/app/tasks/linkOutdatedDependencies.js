const runCommand = require('./runCommand');

const OUTDATED_DEPENDENCIES = [
  'react-native-splash-screen'
];

function reactNativeLink(projectName, dependencies, options) {
  if (!OUTDATED_DEPENDENCIES.length) return null;
  return runCommand({
    command: ['react-native', ['link'].concat(dependencies), { cwd: `${process.cwd()}/${projectName}` }],
    loadingMessage: `Linking outdated dependencies`,
    successMessage: 'Link ready!',
    failureMessage: 'Linking failed. Turn verbose mode on for detailed logging',
    context: options
  });
}

module.exports = function linkOutdatedDependencies() {
  return reactNativeLink(this.projectName, OUTDATED_DEPENDENCIES, this.options).then(() => console.log('If any of them has been updated, please run \'react-native unlink [dependency]\', install pods again and notify us to remove it from the list.'))
    .catch(() => {
      process.exit(1);
    });
};