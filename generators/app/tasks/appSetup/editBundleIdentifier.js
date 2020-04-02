const runCommand = require('../runCommand');

module.exports = function editBundleIdentifier() {
  return runCommand({
    command: [
      'bundle',
      [
        'exec',
        'fastlane',
        'ios',
        'update_bundle_identifier',
        `project_name:${this.projectName}`,
        `bundle_identifier:${this.bundleId}`
      ],
      { cwd: `${process.cwd()}/${this.projectName}/ios` }
    ],
    loadingMessage: 'Updating bundle identifier...',
    successMessage: 'Bundle identifier updated!',
    failureMessage: 'Bundle identifier update failed. Turn verbose mode on for detailed logging',
    context: this.options
  });
};
