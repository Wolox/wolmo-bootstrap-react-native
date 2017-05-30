module.exports = function enableFullscreen() {
  const iosProjectContent = this.fs.read(
    `${this.projectName}/ios/${this.projectName}.xcodeproj/project.pbxproj`
  );
  const replaceRegex = new RegExp('<key>UISupportedInterfaceOrientations</key>', 'g');
  const fixedProjectContent = iosProjectContent.replace(
    replaceRegex,
    '<key>UIRequiresFullScreen</key>\n\t\t<true/>\n\t\t<key>UISupportedInterfaceOrientations</key>'
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}.xcodeproj/project.pbxproj`, fixedProjectContent);
};
