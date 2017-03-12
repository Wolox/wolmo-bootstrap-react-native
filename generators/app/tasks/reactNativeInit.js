var runCommand = require('./runCommand');

module.exports = function(projectName, options) {
  return runCommand({
    command: ['react-native', ['init', projectName]],
    loadingMessage: 'Initializing react-native',
    successMessage: 'react-native ready!',
    failureMessage: 'react-native set up failed. Turn verbose mode on for detailed logging',
    context: options
  });
}
