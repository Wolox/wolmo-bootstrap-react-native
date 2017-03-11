const spawn = require('child_process').spawn;

module.exports = function(name, options) {
  console.log('Setting up react-native...'.cyan);
  return new Promise(function (resolve, reject) {
    const ls = spawn('react-native', ['init', name]);

    ls.stdout.on('data', (data) => {
      if (options.verbose) {
        console.log(data);
      }
    });

    ls.stderr.on('data', (data) => {
      if (options.verbose) {
        console.log(data.red);
      }
    });

    ls.on('close', (code) => {
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
