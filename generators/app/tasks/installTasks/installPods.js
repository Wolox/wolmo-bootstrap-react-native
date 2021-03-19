const runCommand = require('../runCommand');

module.exports = function installPods() {
  return runCommand({
    command: [
      'npx',
      ['pod-install', 'ios', '--non-interactive'],
      { cwd: `${process.cwd()}/${this.projectName}` }
    ],
    loadingMessage: 'Installing Pods...',
    successMessage: 'Pods ready!',
    failureMessage: 'Pod install failed. Turn verbose mode on for detailed logging',
    context: this.options
  });
};
