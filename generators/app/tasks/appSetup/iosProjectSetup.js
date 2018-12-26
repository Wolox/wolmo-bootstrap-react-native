module.exports = function fixBundleIndentifier() {
  const iosProjectContent = this.fs.read(
    `${this.projectName}/ios/${this.projectName}.xcodeproj/project.pbxproj`
  );
  const replaceRegex = new RegExp(`PRODUCT_NAME = ${this.projectName};`, 'g');
  const fixedProjectContent = iosProjectContent.replace(
    replaceRegex,
    `PRODUCT_NAME = ${this.projectName};\n\t\t\t\tTARGETED_DEVICE_FAMILY = "1,2";`
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}.xcodeproj/project.pbxproj`, fixedProjectContent);
};
