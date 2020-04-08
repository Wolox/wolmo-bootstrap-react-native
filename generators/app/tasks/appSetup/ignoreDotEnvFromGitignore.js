module.exports = function ignoreDotEnvFromGitignore() {
  let gitignore = this.fs.read(`${this.projectName}/.gitignore`);
  gitignore = gitignore.concat('\n# Env\n/*.env\n');

  this.fs.write(`${this.projectName}/.gitignore`, gitignore);
};
