module.exports = function eslintSetup() {
  const packageJson = this.fs.readJSON(this.destinationPath(this.projectName, 'package.json'));
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts.lint = 'eslint src';
  packageJson.scripts['lint-fix'] = 'eslint src --fix';
  packageJson.scripts['lint-diff'] = 'git diff --name-only --cached --relative | grep \\.js$ | xargs eslint';
  packageJson.scripts.precommit = 'npm run lint-diff';
  this.fs.writeJSON(this.destinationPath(this.projectName, 'package.json'), packageJson);

  this.fs.copy(this.templatePath('.eslintrc.ejs'), this.destinationPath(this.projectName, '.eslintrc.js'));
  this.fs.copy(this.templatePath('.eslintignore'), this.destinationPath(this.projectName, '.eslintignore'));
};
