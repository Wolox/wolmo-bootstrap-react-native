const spawn = require('child_process').spawn;

module.exports = function() {
  return new Promise(function (resolve, reject) {
    const ls = spawn('yarn', ['global', 'add', 'react-native-cli']);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });
}
