const runCommand = require('./runCommand');

const fastlaneMobileHTTPS = 'https://github.com/Wolox/fastlane-mobile.git';
const fastlaneFolderOrigin = 'fastlane-mobile/fastlane';
const fastlaneFolderDestination = 'fastlane';
const removeFastlaneMobie = 'fastlane-mobile';

module.exports = function configureFastlane() {
  return runCommand({
    command: [
      'git',
      ['clone', `${fastlaneMobileHTTPS}`],
      { cwd: `${process.cwd()}/${this.projectName}/ios` }
    ],
    loadingMessage: 'Fetching lastest Fastlane version...',
    successMessage: 'Fetch Success!',
    failureMessage: 'Fetch Failure!',
    context: this.options
  })
    .then(() =>
      runCommand({
        command: [
          'mv',
          [`${fastlaneFolderOrigin}`, `${fastlaneFolderDestination}`],
          { cwd: `${process.cwd()}/${this.projectName}/ios` }
        ],
        successMessage: 'Move Success!',
        context: this.options
      })
    )
    .then(() =>
      runCommand({
        command: [
          'rm',
          ['-rf', `${removeFastlaneMobie}`],
          { cwd: `${process.cwd()}/${this.projectName}/ios` }
        ],
        successMessage: 'Delete Success!',
        context: this.options
      })
    );
};
