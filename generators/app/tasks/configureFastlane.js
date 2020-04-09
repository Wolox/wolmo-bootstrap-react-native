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
    )
    .then(() => {
      const fastlaneEnv = this.fs.read(`${this.projectName}/ios/fastlane/config/.env`);
      const updateFastlaneEnv = fastlaneEnv.concat(
        `PROJECT_FILE_NAME="${this.projectName}"\nXCODE_PROJECT_PATH="${process.cwd()}/${
          this.projectName
        }/ios/${this.projectName}.xcodeproj"`
      );
      this.fs.write(`${this.projectName}/ios/fastlane/config/.env`, updateFastlaneEnv);

      const fastlaneAction = this.fs.read(`${this.projectName}/ios/fastlane/actions/project_name.rb`);
      let updateFastlaneAction = fastlaneAction.replace(
        'env_info[PROJECT_NAME_ENV_KEY] + env_info[PROJECT_EXTENSION_ENV_KEY] || DEFAULT_PROJECT_EXTENSION',
        `env_info[XCODE_PROJECT_PWD] || (ENV['PWD'] + "/" + env_info[PROJECT_NAME_ENV_KEY] + (env_info[PROJECT_EXTENSION_ENV_KEY] || DEFAULT_PROJECT_EXTENSION))`
      );
      updateFastlaneAction = updateFastlaneAction.replace(
        'PROJECT_NAME_ENV_KEY = "PROJECT_FILE_NAME".freeze\n',
        'PROJECT_NAME_ENV_KEY = "PROJECT_FILE_NAME".freeze\n\t\t\tXCODE_PROJECT_PWD = "XCODE_PROJECT_PATH".freeze'
      );
      this.fs.write(`${this.projectName}/ios/fastlane/actions/project_name.rb`, updateFastlaneAction);
    });
};
