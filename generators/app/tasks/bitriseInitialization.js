const fs = require('fs');

const runCommand = require('./runCommand');
const createBitriseApp = require('./createBitriseApp');

function isNotEmpty(key, value) {
  const message = `The field ${key} in bitriseInfo.json file is required to run the script`;
  if ((!value && typeof value === 'string') || value === null || value === undefined) {
    return message;
  }
  return '';
}
function validateConfigObject(object) {
  let lastMessage = '';
  Object.keys(object).forEach(key => {
    const message = isNotEmpty(key, object[key]);
    if (message) {
      lastMessage = lastMessage.concat('\n', message);
    }
  });
  return lastMessage;
}
module.exports = function bitriseInitialization() {
  return runCommand({
    command: ['ssh-keygen', ['-t', 'rsa', '-b', '4096', '-P', '', '-f', './bitrise-ssh', '-m', 'PEM']],
    loadingMessage: 'Creating ssh key...',
    context: this.options
  }).then(({ spinner }) => {
    spinner.stop();
    const privateSshKey = fs.readFileSync('./bitrise-ssh').toString();
    const publicSshKey = fs.readFileSync('./bitrise-ssh.pub').toString();
    const bitriseYml = fs
      .readFileSync('./wolmo-bootstrap-react-native/generators/app/defaultBitrise.yml')
      .toString();
    try {
      const configInfo = JSON.parse(
        fs.readFileSync('./wolmo-bootstrap-react-native/generators/app/bitriseInfo.json').toString()
      );
      const message = validateConfigObject(configInfo);
      const values = {
        repoUrl: configInfo.repositoryUrlSsh,
        isPublic: configInfo.publicRepository,
        repoSlug: configInfo.repositorySlug,
        gitOwner: configInfo.repoOwner,
        provider: configInfo.gitProvider,
        gitToken: configInfo.gitToken,
        bitriseOrganizationSlug: configInfo.bitriseOrganizationSlug,
        bitriseToken: configInfo.bitriseToken,
        type: 'git',
        privateSshKey,
        publicSshKey,
        bitriseYml
      };
      if (message) {
        console.log(message.bold.underline.red);
      } else {
        createBitriseApp(values);
      }
    } catch (e) {
      console.log('The bitriseInfo.json file is writed wrong'.red.underline.bold);
    }
  });
};
