const runCommand = require('./runCommand');

module.exports = function bundleInstall() {
  return runCommand({
    command: ['gem', ['install', 'bundler'], { cwd: `${process.cwd()}/${this.projectName}` }],
    loadingMessage: 'Installing bundler',
    successMessage: 'bundler ready!',
    failureMessage: '"gem install bundler" failed. Turn verbose mode on for detailed logging',
    context: this.options
  }).then(() =>
    runCommand({
      command: ['bundle', ['install'], { cwd: `${process.cwd()}/${this.projectName}` }],
      loadingMessage: 'Installing fastlane gems',
      successMessage: 'Fastlane ready!',
      failureMessage: '"bundle install" failed. Turn verbose mode on for detailed logging',
      context: this.options
    })
  );
};
