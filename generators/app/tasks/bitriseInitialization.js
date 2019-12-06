const fs = require('fs');

const loadBitriseInfo = require('../bitriseUtils');

const runCommand = require('./runCommand');
const createBitriseApp = require('./createBitriseApp');

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
    let configInfo = null;
    let messageError = null;
    if (!this.configInfo && !this.messageError) {
      const { configInfo: info, messageError: error } = loadBitriseInfo();
      configInfo = info;
      messageError = error;
    } else {
      const { configInfo: info, messageError: error } = this;
      configInfo = info;
      messageError = error;
    }
    if (messageError) {
      console.log(messageError.bold.underline.red);
    } else {
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
      createBitriseApp(values);
    }
  });
};
