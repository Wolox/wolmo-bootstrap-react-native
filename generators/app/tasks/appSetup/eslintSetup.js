module.exports = function eslintSetup() {
  this.fs.copy(this.templatePath('.eslintrc.ejs'), this.destinationPath(this.projectName, '.eslintrc.js'));
};
