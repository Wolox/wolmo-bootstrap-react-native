const runCommand = require('../runCommand');

module.exports = function lintFixProject() {
  return runCommand({
    command: ['yarn', ['lint', '--fix'], { cwd: `${process.cwd()}/${this.projectName}` }],
    loadingMessage: 'Fixing linter problems...',
    successMessage: 'Linter problems fixed!',
    failureMessage: 'Error fixing some linter problems',
    context: this.options
  });
};
