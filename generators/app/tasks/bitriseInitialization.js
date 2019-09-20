const runCommand = require('./runCommand');
const createBitriseApp = require('./createBitriseApp');
const fs = require('fs');

module.exports = function bitriseInitialization() {
    return runCommand({
        command: ['ssh-keygen', ['-t', 'rsa', '-b', '4096', '-P', '', '-f', './bitrise-ssh', '-m', 'PEM']],
        loadingMessage: 'Creating ssh key...',
        context: this.options
      }).then(({ spinner }) =>
      {
        spinner.stop();
        return this.prompt([
            {
              type: 'input',
              name: 'repoUrl',
              message: "What's your repository url? (ssh only)",
              validate: val => (val ? true : 'Repository url (ssh) is required to configure bitrise')
            }
          ]).then(({ repoUrl }) => {
            this.repoUrl = repoUrl;
            // git remote add origin <url>
            return this.prompt([
                {
                  type: 'input',
                  name: 'isPublic',
                  message: "Is your repo public? If true then the repository visibility setting will be public, in case of false it will be private",
                  validate: val => (val ? true : 'This value is required to configure bitrise')
                }
              ]).then(({ isPublic }) => {
                this.isPublic = isPublic;
                return this.prompt([
                    {
                      type: 'input',
                      name: 'repoSlug',
                      message: "Write the repo slug (The name of your repo not the url)",
                      validate: val => (val ? true : 'Repository slug is required to configure bitrise')
                    }
                  ]).then(({ repoSlug }) => {
                    this.repoSlug = repoSlug;
                    return this.prompt([
                        {
                          type: 'input',
                          name: 'gitOwner',
                          message: "Who is the owner of the repo?",
                          validate: val => (val ? true : 'Owner is required to configure bitrise')
                        }
                      ]).then(({ gitOwner }) => {
                        this.gitOwner = gitOwner;
                        return this.prompt([
                            {
                              type: 'input',
                              name: 'provider',
                              message: "The git provider you are using, it can be 'github', 'bitbucket', 'gitlab', 'gitlab-self-hosted' or 'custom'",
                              validate: val => (val ? true : 'Provider is required to configure bitrise')
                            }
                          ]).then(({ provider }) => {
                            this.provider = provider;
                            return this.prompt([
                                {
                                  type: 'input',
                                  name: 'githubToken',
                                  message: "Please, write your github token with permissions to create ssh keys here (write it with the format 'token ...')",
                                  validate: val => (val ? true : 'Github token is required to configure bitrise')
                                }
                              ]).then(({ githubToken }) => {
                                this.githubToken = githubToken;
                                return this.prompt([
                                    {
                                      type: 'input',
                                      name: 'bitriseToken',
                                      message: "Please, write your bitrise token with permissions to create ssh keys here",
                                      validate: val => (val ? true : 'Bitrise token is required to configure bitrise')
                                    }
                                  ]).then(({ bitriseToken }) => {
                                    this.bitriseToken = bitriseToken;
                                    const privateSshKey = fs.readFileSync('./bitrise-ssh').toString();
                                    const publicSshKey = fs.readFileSync('./bitrise-ssh.pub').toString();
                                    const bitriseYml = fs.readFileSync('./wolmo-bootstrap-react-native/generators/app/defaultBitrise.yml').toString();
                                    const values = {
                                        repoUrl,
                                        isPublic: (isPublic === 'true'),
                                        repoSlug,
                                        gitOwner,
                                        provider,
                                        githubToken,
                                        bitriseToken,
                                        type: 'git',
                                        privateSshKey,
                                        publicSshKey,
                                        bitriseYml
                                    }
                                    createBitriseApp(values);
                                  });
                              });
                          });
                      });
                  });
              });
      });
    });
}
