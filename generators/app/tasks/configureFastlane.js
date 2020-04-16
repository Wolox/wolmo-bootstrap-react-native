const runCommand = require('./runCommand');

const fastlaneMobileHTTPS = 'https://github.com/Wolox/fastlane-mobile.git';
const fastlaneAndroidFolderOrigin = 'fastlane-mobile/android/fastlane';
const fastlaneIosFolderOrigin = 'fastlane-mobile/ios/fastlane';
const fastlaneFolderDestination = 'fastlane';
const fastlaneMobileRoot = 'fastlane-mobile';

function configureIosFastlane() {
  return runCommand({
    command: [
      'mv',
      [`${fastlaneIosFolderOrigin}`, `ios/${fastlaneFolderDestination}`],
      { cwd: `${process.cwd()}/${this.projectName}` }
    ],
    successMessage: 'Moved ios lanes!',
    context: this.options
  })
    .then(() => {
      runCommand({
        command: [
          'mv',
          [`${fastlaneMobileRoot}/ios/Gemfile`, `ios`],
          { cwd: `${process.cwd()}/${this.projectName}` }
        ],
        successMessage: 'Moved Gemfile!',
        context: this.options
      });
    })
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
        `ENV['PWD'] + "/" + env_info[PROJECT_NAME_ENV_KEY] + (env_info[PROJECT_EXTENSION_ENV_KEY] || DEFAULT_PROJECT_EXTENSION)`,
        `env_info[XCODE_PROJECT_PWD] || ENV['PWD'] + "/" + env_info[PROJECT_NAME_ENV_KEY] + (env_info[PROJECT_EXTENSION_ENV_KEY] || DEFAULT_PROJECT_EXTENSION)`
      );
      updateFastlaneAction = updateFastlaneAction.replace(
        'PROJECT_NAME_ENV_KEY = "PROJECT_FILE_NAME".freeze\n',
        'PROJECT_NAME_ENV_KEY = "PROJECT_FILE_NAME".freeze\n\t\t\tXCODE_PROJECT_PWD = "XCODE_PROJECT_PATH".freeze'
      );
      this.fs.write(`${this.projectName}/ios/fastlane/actions/project_name.rb`, updateFastlaneAction);
    });
}

function configureAndroidFastlane() {
  return runCommand({
    command: [
      'mv',
      [`${fastlaneAndroidFolderOrigin}`, `android/${fastlaneFolderDestination}`],
      { cwd: `${process.cwd()}/${this.projectName}` }
    ],
    successMessage: 'Moved android lanes!',
    context: this.options
  })
    .then(() => {
      runCommand({
        command: [
          'mv',
          [`${fastlaneMobileRoot}/android/version.gradle`, `android/app`],
          { cwd: `${process.cwd()}/${this.projectName}` }
        ],
        successMessage: 'Moved version.gradle!',
        context: this.options
      });
    })
    .then(() => {
      runCommand({
        command: [
          'mv',
          [`${fastlaneMobileRoot}/android/Gemfile`, `android`],
          { cwd: `${process.cwd()}/${this.projectName}` }
        ],
        successMessage: 'Moved Gemfile!',
        context: this.options
      });
    })
    .then(() => {
      const buildGradle = this.fs.read(`${this.projectName}/android/app/build.gradle`);
      let updateBuildGradle = buildGradle.replace(
        'apply plugin: "com.android.application"',
        'apply plugin: "com.android.application"\napply from: \'version.gradle\''
      );
      updateBuildGradle = updateBuildGradle.replace('versionCode 1', 'versionCode generateVersionCode()');
      updateBuildGradle = updateBuildGradle.replace('versionName "1.0"', 'versionName generateVersionName()');
      this.fs.write(`${this.projectName}/android/app/build.gradle`, updateBuildGradle);

      const gradleProps = this.fs.read(`${this.projectName}/android/gradle.properties`);
      const updateGradleProps = gradleProps.concat(
        '# Version of the application\nVERSION_CODE=1\nVERSION_NAME=1.0'
      );
      this.fs.write(`${this.projectName}/android/gradle.properties`, updateGradleProps);
    });
}

module.exports = function configureFastlane() {
  return (
    runCommand({
      command: ['git', ['clone', `${fastlaneMobileHTTPS}`], { cwd: `${process.cwd()}/${this.projectName}` }],
      loadingMessage: 'Fetching lastest Fastlane version...',
      successMessage: 'Fetch Success!',
      failureMessage: 'Fetch Failure!',
      context: this.options
    })
      // Remove this after fastlane-for-android branch is merged to master
      .then(() =>
        runCommand({
          command: [
            'git',
            ['checkout', '-b', 'fastlane-for-android', 'origin/fastlane-for-android'],
            { cwd: `${process.cwd()}/${this.projectName}/${fastlaneMobileRoot}` }
          ],
          loadingMessage: 'Moving to branch',
          successMessage: 'Moved to branch!',
          failureMessage: 'Move to branch Failure!',
          context: this.options
        })
      )
      .then(() => configureIosFastlane.bind(this)())
      .then(() => configureAndroidFastlane.bind(this)())
      .then(() =>
        runCommand({
          command: ['rm', ['-rf', `${fastlaneMobileRoot}`], { cwd: `${process.cwd()}/${this.projectName}` }],
          successMessage: 'Deleted fastlane-mobile repo successfully!',
          context: this.options
        })
      )
  );
};
