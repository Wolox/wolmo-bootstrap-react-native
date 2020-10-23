const runCommand = require('../runCommand');

module.exports = function installPods() {
  return runCommand({
    command: ['pod', ['install', '--repo-update'], { cwd: `${process.cwd()}/${this.projectName}/ios` }],
    loadingMessage: 'Installing Pods...',
    successMessage: 'Pods ready!',
    failureMessage: 'Pod install failed. Turn verbose mode on for detailed logging',
    context: this.options
  });
};
