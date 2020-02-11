const runCommand = require('./runCommand');

const fastlaneMobileHTTPS = 'https://github.com/Wolox/fastlane-mobile.git';
const fastlaneMvCommand = 'fastlane-mobile/fastlane ios/fastlane';
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
        command: ['mv', [`${fastlaneMvCommand}`], { cwd: `${process.cwd()}/${this.projectName}/ios` }],
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
        context: this.options
      })
    );
};
