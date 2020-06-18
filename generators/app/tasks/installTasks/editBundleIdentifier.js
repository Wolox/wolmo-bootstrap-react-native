const runCommand = require('../runCommand');

function revertActionModifications() {
  return runCommand({
    command: [
      'mv',
      ['.envCopy', '.env'],
      { cwd: `${process.cwd()}/${this.projectName}/ios/fastlane/config` }
    ],
    context: this.options
  }).then(() =>
    runCommand({
      command: [
        'mv',
        ['project_name_copy', 'project_name.rb'],
        { cwd: `${process.cwd()}/${this.projectName}/ios/fastlane/actions` }
      ],
      context: this.options
    })
  );
}

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
  }).then(() => revertActionModifications.bind(this)());
};
