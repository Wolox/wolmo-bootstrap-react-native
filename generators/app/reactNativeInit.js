const spawn = require('child_process').spawn;

module.exports = function(projectName, options) {
  console.log('Setting up react-native...'.cyan);
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
        console.log('react-native set up finished successfully'.green);
        resolve();
      } else {
        console.log('react-native set up failed. Turn verbose mode on for detailed logging'.red);
        reject();
      }
    });
  });
}
