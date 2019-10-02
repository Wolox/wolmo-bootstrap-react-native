const runCommand = require('../runCommand');

module.exports = function linkAppAssets() {
  return runCommand({
    command: ['react-native', ['link']],
    loadingMessage: 'Linking app assets...',
    successMessage: 'App assets ready!',
    failureMessage: 'Linking app assets failed. Turn verbose mode on for detailed logging',
    context: this.options
  });
};
