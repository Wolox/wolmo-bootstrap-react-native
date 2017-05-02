module.exports = function fixBundleIndentifier() {
  const iosProjectContent = this.fs.read(
    `${this.projectName}/ios/${this.projectName}.xcodeproj/project.pbxproj`
  );
  const replaceRegex = new RegExp(`PRODUCT_NAME = ${this.projectName};`, 'g');
  const fixedProjectContent = iosProjectContent.replace(
    replaceRegex,
    `PRODUCT_BUNDLE_IDENTIFIER = com.wolox.${this.projectName};\n\t\t\t\tPRODUCT_NAME = ${this.projectName};`
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}.xcodeproj/project.pbxproj`, fixedProjectContent);

  const infoPlistContent = this.fs.read(`${this.projectName}/ios/${this.projectName}/Info.plist`);
  const fixedInfoContent = infoPlistContent.replace(
    '<string>org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)</string>',
    '<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>'
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}/Info.plist`, fixedInfoContent);
};
