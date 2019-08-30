const runCommand = require('./runCommand');

module.exports = function configurePods() {
  return runCommand({
    command: ['pod', ['install'], { cwd: `${process.cwd()}/${this.projectName}/ios` }],
    loadingMessage: 'Installing Pods...',
    context: this.options
  }).then(({ spinner }) => {
    spinner.succeed('Pods ready!');
  });
};
