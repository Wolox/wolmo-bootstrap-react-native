module.exports.PUSH_NOTIFICATIONS_SETUP_LINK =
  'https://facebook.github.io/react-native/docs/pushnotificationios.html';

module.exports.BITRISE_PROMPTS = {
  repositoryUrlSsh: {
    type: 'input',
    name: 'repositoryUrlSsh',
    message: "What's your repository url? (ssh only)",
    validate: val => (val ? true : 'Repository url (ssh) is required to configure bitrise')
  },
  publicApp: {
    type: 'input',
    name: 'publicApp',
    message:
      'Is your repo public? If true then the repository visibility setting will be public, in case of false it will be private',
    validate: val => (typeof val === 'boolean' ? true : 'This value is required to configure bitrise'),
    filter: val => val === 'true'
  },
  repositorySlug: {
    type: 'input',
    name: 'repositorySlug',
    message: 'Write the repo slug (The name of your repo not the url)',
    validate: val => (val ? true : 'Repository slug is required to configure bitrise')
  },
  repoOwner: {
    type: 'input',
    name: 'repoOwner',
    message: 'Who is the owner of the repo?',
    validate: val => (val ? true : 'Owner is required to configure bitrise')
  },
  gitProvider: {
    type: 'input',
    name: 'gitProvider',
    message:
      "The git provider you are using, it can be 'github', 'bitbucket', 'gitlab', 'gitlab-self-hosted' or 'custom'",
    validate: val => (val ? true : 'Provider is required to configure bitrise')
  },
  gitToken: {
    type: 'input',
    name: 'gitToken',
    message:
      "Please, write your git token (github, gitlab ot bitbucket) with permissions to create ssh keys here (write it with the format 'token <access_token>' if it is github, 'Bearer <access_token>' if it's gitlab or bitbucket)",
    validate: val => (val ? true : 'Github token is required to configure bitrise')
  },
  bitriseOrganizationSlug: {
    type: 'input',
    name: 'bitriseOrganizationSlug',
    message: 'Please, write your Bitrise organization slug',
    validate: val => (val ? true : 'Organization slug is required')
  },
  bitriseToken: {
    type: 'input',
    name: 'bitriseToken',
    message: 'Please, write your bitrise token with permissions to create ssh keys here',
    validate: val => (val ? true : 'Bitrise token is required to configure bitrise')
  }
};
