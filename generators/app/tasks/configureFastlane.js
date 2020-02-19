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
      const fastlaneFastfile = this.fs.read(`${this.projectName}/ios/fastlane/Fastfile`);
      const updateFastlaneFastfile = fastlaneFastfile.replace(
        "import 'Fastfile.private'",
        `import 'Fastfile.private'\n
desc "Update Bundle Identifier"
lane :update_bundle_identifier do |options|
  project_name = options[:project_name]
  update_app_identifier(
    xcodeproj: "./#{project_name}.xcodeproj", # Optional path to xcodeproj, will use the first .xcodeproj if not set
    plist_path: "./#{project_name}/Info.plist", # Path to info plist file, relative to xcodeproj
    app_identifier: "#{options[:bundle_identifier]}" # The App Identifier
  )
end`
      );
      this.fs.write(`${this.projectName}/ios/fastlane/Fastfile`, updateFastlaneFastfile);
    });
};
