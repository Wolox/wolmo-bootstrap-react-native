require('colors');
const ora = require('ora');
const spawn = require('child_process').spawn;

/**
 * Receives only one argument which is an object of options:
 * - (mandatory) command {array}: list of paramaters to send to child_process.spawn
 * - loadingMessage {string}: Message shown while the command is running
 * - successMessage {string}: Message shown when the command finishes successfuly
 * - failureMessage {string}: Message shown when the command fails
 * - context {obj}: Yeoman context options and arguments
 *
 * Returns a promise that resolves to the loading spinner if the loading message is present
 */
module.exports = function(options) {
  const spinner = options.loadingMessage && ora({ spinner: 'bouncingBall', text: options.loadingMessage }).start();
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
        if (spinner && options.successMessage) {
          spinner.succeed(options.successMessage);
        }
        resolve(spinner);
      } else {
        if (spinner && options.failureMessage) {
          spinner.fail(options.failureMessage);
        }
        reject(spinner);
      }
    });
  });
}
