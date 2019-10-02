const runCommand = require('./runCommand');

module.exports = function configurePods() {
  return runCommand({
    command: ['pod', ['install'], { cwd: `${process.cwd()}/${this.projectName}/ios` }],
    loadingMessage: 'Installing Pods...',
    successMessage: 'Pods ready!',
    failureMessage: 'Pod install failed. Turn verbose mode on for detailed logging',
    context: this.options
  });
};
