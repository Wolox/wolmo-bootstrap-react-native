module.exports = function createDotEnvFilesLocally() {
  this.fs.write(`${this.projectName}/.dev.env`, 'EMPTY_VARIABLE=DEVELOPMENT');
  this.fs.write(`${this.projectName}/.stage.env`, 'EMPTY_VARIABLE=STAGE');
  this.fs.write(`${this.projectName}/.production.env`, 'EMPTY_VARIABLE=PRODUCTION');
};
