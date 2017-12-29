module.exports = function babelrcSetup() {
  this.fs.extendJSON(`${this.projectName}/.babelrc`, { plugins: ['import-glob'] });
};
