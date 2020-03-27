const runCommand = require('./runCommand');

module.exports = function installPods() {
  return runCommand({
    command: ['pod', ['install', '--repo-update'], { cwd: `${process.cwd()}/${this.projectName}/ios` }],
    loadingMessage: '\nUpdating and installing Pods...',
    successMessage: '\nPods ready!',
    failureMessage: '\nPod install failed. Turn verbose mode on for detailed logging',
    context: this.options
  });
};
