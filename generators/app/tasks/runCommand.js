require('colors');
const ora = require('ora');
const spawn = require('child_process').spawn;

/**
 * Receives only one argument which is an object of options:
 * - (mandatory) command: list of paramaters to send to child_process.spawn
 * - (mandatory) loadingMessage: Message shown while the command is running
 * - (mandatory) successMessage: Message shown when the command finishes successfuly
 * - (mandatory) failureMessage: Message shown when the command fails
 * - context: Yeoman context options and arguments
 *
 * Returns a promise
 */
module.exports = function(options) {
  const spinner = ora({ spinner: 'bouncingBall', text: options.loadingMessage }).start();
  return new Promise(function (resolve, reject) {
    const command = spawn(...options.command);

    command.stdout.on('data', (data) => {
      if (options.context && options.context.verbose && data) {
        console.log(data.toString());
      }
    });

    command.stderr.on('data', (data) => {
      if (options.context && options.context.verbose && data) {
        const msg = data.toString();
        console.log(/warning/.test(msg) ? msg.yellow : msg.red);
      }
    });

    command.on('close', (code) => {
      if (code === 0) {
        spinner.succeed(options.successMessage);
        resolve();
      } else {
        spinner.fail(options.failureMessage);
        reject();
      }
    });
  });
}
