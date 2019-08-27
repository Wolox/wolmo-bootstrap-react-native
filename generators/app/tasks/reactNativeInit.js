const runCommand = require('./runCommand');

module.exports = function reactNativeInit() {
  return runCommand({
    command: ['react-native', ['init', this.projectName]],
    loadingMessage: 'Initializing react-native',
    context: this.options
  })
    .then(({ spinner }) => {
      spinner.succeed('react-native ready!');
    })
    .catch(({ spinner }) => {
      spinner.fail('react-native set up failed. Turn verbose mode on for detailed logging');
    });
};
