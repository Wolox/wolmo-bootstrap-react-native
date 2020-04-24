const runCommand = require('./lintFixProject');

module.exports = function lintFixProject() {
  return runCommand({
    command: ['yarn', ['install'], { cwd: `${process.cwd()}/${this.projectName}` }],
    loadingMessage: 'Installing dependencies...',
    successMessage: 'Dependencies installed!',
    failureMessage: 'Error while installind dependencies',
    context: this.options
  }).then(() =>
    runCommand({
      command: ['yarn', ['lint', '--fix'], { cwd: `${process.cwd()}/${this.projectName}` }],
      loadingMessage: 'Fixing linter problems...',
      successMessage: 'Linter problems fixed!',
      failureMessage: 'Error fixing some linter problems',
      context: this.options
    })
  );
};
