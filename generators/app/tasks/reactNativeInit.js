const ora = require('ora');
const spawn = require('child_process').spawn;

module.exports = function(projectName, options) {
  const spinner = ora({ spinner: 'bouncingBall', text: 'Initializing react-native' }).start();
  return new Promise(function (resolve, reject) {
    const command = spawn('react-native', ['init', projectName]);

    command.stdout.on('data', (data) => {
      if (options.verbose) {
        console.log(data.toString());
      }
    });

    command.stderr.on('data', (data) => {
      if (options.verbose && data) {
        const msg = data.toString();
        console.log(/warning/.test(msg) ? msg.yellow : msg.red);
      }
    });

    command.on('close', (code) => {
      if (code === 0) {
        spinner.succeed('react-native ready!');
        resolve();
      } else {
        spinner.fail('react-native set up failed. Turn verbose mode on for detailed logging');
        reject();
      }
    });
  });
}
