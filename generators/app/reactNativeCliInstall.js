require('colors');
const spawn = require('child_process').spawn;

module.exports = function(options) {
  console.log('Installing react-native-cli...'.cyan);
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
        console.log('Latest react-native-cli installed'.green);
        resolve();
      } else {
        console.log('react-native-cli install failed. Turn verbose mode on for detailed logging'.red);
        reject();
      }
    });
  });
}
