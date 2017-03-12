const ora = require('ora');
const spawn = require('child_process').spawn;

module.exports = function(options) {
  const spinner = ora({ spinner: 'bouncingBall', text: 'Installing react-native-cli' }).start();

  return new Promise(function (resolve, reject) {
    const command = spawn('yarn', ['global', 'add', 'react-native-cli']);

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
        spinner.succeed('react-native-cli ready!');
        resolve();
      } else {
        spinner.fail('react-native-cli install failed. Turn verbose mode on for detailed logging');
        reject();
      }
    });
  });
}
