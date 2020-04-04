const runCommand = require('../runCommand');

module.exports = function configureIosProject() {
  return runCommand({
    command: [
      'ruby',
      ['scriptIosConfig.rb', this.projectName, process.cwd(), this.features.crashlytics],
      { cwd: `${process.cwd()}/wolmo-bootstrap-react-native/generators/app/tasks/appSetup` }
    ],
    loadingMessage: 'Deleting targets and generating build configurations...\n',
    successMessage: 'Ios project configured!',
    failureMessage: 'Ios project was not configured',
    context: this.options
  });
};
