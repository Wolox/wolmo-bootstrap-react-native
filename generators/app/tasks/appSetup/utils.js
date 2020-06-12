module.exports.copyFile = function copyFile(filepath) {
  if (!this.fs) {
    throw new Error('File utils functions needs to be binded to the generator context');
  }

  this.fs.copy(
    this.templatePath(...filepath.split('/')),
    this.destinationPath(this.projectName, ...filepath.split('/'))
  );
};

module.exports.copyTemplateFile = function copyTemplateFile(filepath) {
  if (!this.fs) {
    throw new Error('File utils functions needs to be binded to the generator context');
  }

  const filepathWithoutExtension = filepath.substring(0, filepath.lastIndexOf('.'));
  const templatePath = `${filepathWithoutExtension}.ejs`;

  this.fs.copyTpl(
    this.templatePath(...templatePath.split('/')),
    this.destinationPath(this.projectName, ...filepath.split('/')),
    { projectName: this.projectName, features: this.features }
  );
};
