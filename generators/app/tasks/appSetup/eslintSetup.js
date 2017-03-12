module.exports = function eslintSetup() {
  const packageJson = this.fs.readJSON(this.destinationPath(this.projectName, 'package.json'));
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts.lint = 'eslint .';
  packageJson.scripts['lint-fix'] = 'eslint . --fix';
  this.fs.writeJSON(this.destinationPath(this.projectName, 'package.json'), packageJson);

  this.fs.copy(this.templatePath('.eslintrc.ejs'), this.destinationPath(this.projectName, '.eslintrc.js'));
};
