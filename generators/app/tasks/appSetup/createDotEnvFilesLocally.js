module.exports = function createDotEnvFilesLocally() {
  console.log(this.projectName);
  this.fs.write(`${this.projectName}/.env.dev`, "EMPTY_VARIABLE=DEVELOPMENT");
  this.fs.write(`${this.projectName}/.env.stage`, "EMPTY_VARIABLE=STAGE");
  this.fs.write(
    `${this.projectName}/.env.production`,
    "EMPTY_VARIABLE=PRODUCTION"
  );
};
