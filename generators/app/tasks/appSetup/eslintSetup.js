module.exports = function () {
  this.fs.copy(
    this.templatePath('.eslintrc.js'),
    this.destinationPath(this.projectName, '.eslintrc.js')
  );
}
