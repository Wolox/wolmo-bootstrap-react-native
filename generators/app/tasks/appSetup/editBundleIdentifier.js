const runCommand = require('../runCommand');

module.exports = function editBundleIdentifier() {
  return runCommand({
    command: [
      'bundle',
      ['exec', 'fastlane', 'update_bundle_identifier'],
      { cwd: `${process.cwd()}/${this.projectName}` }
    ],
    loadingMessage: 'Updating bundle identifier...',
    successMessage: 'Bundle identifier updated!',
    failureMessage: 'Bundle identifier update failed. Turn verbose mode on for detailed logging',
    context: this.options
  });
};
