const runCommand = require('../runCommand');

module.exports = function chmodFirebaseScript() {
  return runCommand({
    command: ['chmod', ['u+x', 'firebaseFilesScript.sh'], { cwd: `${process.cwd()}/${this.projectName}` }],
    loadingMessage: 'Changing permissions of the firebaseFilesScript file...',
    successMessage: 'Permissions to run the firebaseFilesScript ready!',
    failureMessage:
      'Permissions of the firebaseFilesScript file could not be changed. Try running "chmod u+x firebaseFilesScript.sh" in the root folder of your project',
    context: this.options
  });
};
