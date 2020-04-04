const runCommand = require('../runCommand');

module.exports = function configureIosProject() {
  return runCommand({
    command: ['ruby', ['scriptIosConfig.rb', this.projectName, this.features.crashlytics]],
    loadingMessage: 'Deleting targets and generating build configurations...\n',
    successMessage: 'Ios project configured!',
    failureMessage: 'Ios project was not configured',
    context: this.options
  });
};
