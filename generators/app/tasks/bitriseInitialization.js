const fs = require('fs');

const loadBitriseInfo = require('../bitriseUtils');

const runCommand = require('./runCommand');
const createBitriseApp = require('./createBitriseApp');

module.exports = function bitriseInitialization() {
  return runCommand({
    command: ['ssh-keygen', ['-t', 'rsa', '-b', '4096', '-P', '', '-f', './bitrise-ssh', '-m', 'PEM']],
    loadingMessage: 'Creating ssh key...',
    context: this.options
  }).then(async ({ spinner }) => {
    spinner.stop();
    const privateSshKey = fs.readFileSync('./bitrise-ssh').toString();
    const publicSshKey = fs.readFileSync('./bitrise-ssh.pub').toString();
    const bitriseYml = fs.readFileSync(`${this.templatePath()}/../defaultBitrise.yml`).toString();
    let configInfo = null;
    if (this.configInfo) {
      const { configInfo: info } = this;
      configInfo = info;
    } else {
      const info = await loadBitriseInfo.bind(this)();
      configInfo = info;
    }
    const values = {
      repoUrl: configInfo.repositoryUrlSsh,
      isPublic: configInfo.publicApp,
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
    await createBitriseApp(values);
  });
};
