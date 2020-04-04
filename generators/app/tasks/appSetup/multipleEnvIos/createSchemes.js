const schemeBase = require('./schemeBase');

module.exports = function createSchemes() {
  const commonPath = schemeName =>
    `${this.projectName}/ios/${this.projectName}.xcodeproj/xcshareddata/xcschemes/${schemeName}.xcscheme`;
  this.fs.write(commonPath('qa'), schemeBase.bind(this)('dev', 'QA'));
  this.fs.write(commonPath('dev'), schemeBase.bind(this)('dev', 'Debug'));
  this.fs.write(commonPath('stage'), schemeBase.bind(this)('stage', 'Stage'));
  this.fs.write(commonPath('production'), schemeBase.bind(this)('production', 'Production'));
  this.fs.delete(commonPath(this.projectName));
  this.fs.delete(commonPath(`${this.projectName}-tvOS`));
};
