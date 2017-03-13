const runCommand = require('./runCommand');

module.exports = function reactNativeLink() {
  return runCommand({
    command: ['react-native', ['link'], { cwd: `${process.cwd()}/${this.projectName}` }],
    loadingMessage: 'Linking native modules',
    successMessage: 'react-native link ready!',
    failureMessage: 'react-native link failed. Turn verbose mode on for detailed logging',
    context: this.options,
    timeout: 5000
  });
};
