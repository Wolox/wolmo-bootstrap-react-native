const ora = require('ora');

// function to be binded to yeoman context
module.exports = function () {
  const spinner = ora({ spinner: 'bouncingBall', text: 'Setting up eslint config' }).start();

  this.fs.copy(
    this.templatePath('.eslintrc.js'),
    this.destinationPath(this.projectName, '.eslintrc.js')
  );

  const package = this.fs.readJSON(this.destinationPath(this.projectName, 'package.json'));

  package.scripts = package.scripts || {};
  package.scripts.lint = 'eslint .';
  package.scripts['lint-fix'] = 'eslint . --fix';

  this.fs.writeJSON(this.destinationPath(this.projectName, 'package.json'), package);
  spinner.succeed('eslint ready!');
}
