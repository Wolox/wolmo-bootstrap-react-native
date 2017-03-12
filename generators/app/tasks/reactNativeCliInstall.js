var runCommand = require('./runCommand');

module.exports = function(projectName, options) {
  return runCommand({
    command: ['yarn', ['global', 'add', 'react-native-cli']],
    loadingMessage: 'Installing react-native-cli',
    successMessage: 'react-native-cli ready!',
    failureMessage: 'react-native-cli install failed. Turn verbose mode on for detailed logging',
    context: options
  });
}
