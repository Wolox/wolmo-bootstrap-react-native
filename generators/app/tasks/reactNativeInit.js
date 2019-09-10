const runCommand = require('./runCommand');

module.exports = function reactNativeInit() {
  return runCommand({
    command: ['react-native', ['init', this.projectName]],
    loadingMessage: 'Initializing react-native',
    context: this.options
  }).then(({ spinner }) =>
    runCommand({
      command: ['rm', ['-rf', '__tests__'], { cwd: `${process.cwd()}/${this.projectName}` }],
      context: this.options
    })
      .then(() => {
        spinner.succeed('react-native ready!');
      })
      .catch(() => {
        spinner.fail('react-native set up failed. Turn verbose mode on for detailed logging');
      })
  );
};
