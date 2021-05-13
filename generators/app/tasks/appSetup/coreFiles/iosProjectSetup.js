const createSchemes = require('./multipleEnvIos/createSchemes');

function fixBundleIndentifier() {
  const iosProjectContent = this.fs.read(
    `${this.projectName}/ios/${this.projectName}.xcodeproj/project.pbxproj`
  );
  const replaceRegex = new RegExp(`PRODUCT_NAME = ${this.projectName};`, 'g');
  const fixedProjectContent = iosProjectContent.replace(
    replaceRegex,
    `PRODUCT_NAME = ${this.projectName};\n\t\t\t\tTARGETED_DEVICE_FAMILY = "1,2";`
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}.xcodeproj/project.pbxproj`, fixedProjectContent);
  createSchemes.bind(this)();
}

function disableDarkMode() {
  const infoPlistContent = this.fs.read(`${this.projectName}/ios/${this.projectName}/Info.plist`);
  const updatedInfoPlistContent = infoPlistContent.replace(
    '<key>UIViewControllerBasedStatusBarAppearance</key>',
    '<key>UIUserInterfaceStyle</key>\n\t<string>Light</string>\n\t<key>UIViewControllerBasedStatusBarAppearance</key>'
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}/Info.plist`, updatedInfoPlistContent);
}

module.exports = function iosProjectSetup() {
  fixBundleIndentifier.bind(this)();
  disableDarkMode.bind(this)();
};
