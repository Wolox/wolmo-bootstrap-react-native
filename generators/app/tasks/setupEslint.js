
// function to be binded to yeoman context
module.exports = function (projectName) {
  console.log('Setting up eslint config...'.cyan);

  this.fs.copy(
    this.templatePath('.eslintrc.js'),
    this.destinationPath(projectName, '.eslintrc.js')
  );

  const package = this.fs.readJSON(this.destinationPath(projectName, 'package.json'));

  package.scripts = package.scripts || {};
  package.scripts.lint = 'eslint .';
  package.scripts['lint-fix'] = 'eslint . --fix';

  this.fs.writeJSON(this.destinationPath(projectName, 'package.json'), package);
}
