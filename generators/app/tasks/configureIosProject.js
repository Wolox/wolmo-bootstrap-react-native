const runCommand = require('./runCommand');

module.exports = function configureIosProject() {
  return runCommand({
    command: [
      'ruby',
      [
        'scriptIosConfig.rb',
        this.projectName,
        process.cwd(),
        this.features.crashlytics,
        this.features.crashlytics ||
          this.features.firebaseanalytics ||
          this.features.pushnotifications ||
          this.features.firebaseperformance
      ],
      { cwd: `${this.templatePath()}/../tasks` }
    ],
    loadingMessage: 'Deleting targets and generating build configurations...',
    successMessage: 'Ios project configured!',
    failureMessage: 'Ios project was not configured',
    context: this.options
  });
};
