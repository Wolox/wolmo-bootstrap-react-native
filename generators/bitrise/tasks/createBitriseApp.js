/* eslint-disable camelcase */
const bitriseApi = require('../apis/bitriseApiConfig');
const githubApi = require('../apis/githubApiConfig');
const gitlabApi = require('../apis/gitlabApiConfig');
const bitbucketApi = require('../apis/bitbucketApiConfig');

const gitApi = {
  github: githubApi,
  gitlab: gitlabApi,
  bitbucket: bitbucketApi
};

const createApp = ({ repoUrl, isPublic, gitOwner, provider, repoSlug, type, bitriseOrganizationSlug }) =>
  bitriseApi.post('/apps/register', {
    git_owner: gitOwner,
    is_public: isPublic,
    provider,
    repo_url: repoUrl,
    git_repo_slug: repoSlug,
    type,
    organization_slug: bitriseOrganizationSlug
  });

const createSshOnBitbucket = async (repoSlug, publicSshKey) => {
  const userResponse = await gitApi.bitbucket.get('/user/keys');
  const user = userResponse.data.username;
  return gitApi.bitbucket.post(`/users/${user}/ssh-keys`, {
    label: `bitrise-${repoSlug}`,
    key: publicSshKey
  });
};

const createSshGit = ({ repoSlug, publicSshKey, provider }) =>
  // IMPORTANT -> GITLAB AND GITHUB HAVE THE SAME EP
  provider === 'bitbucket'
    ? createSshOnBitbucket(repoSlug, publicSshKey)
    : gitApi[provider].post('/user/keys', {
        title: `bitrise-${repoSlug}`,
        key: publicSshKey
      });

const registerSshKeyOnBitrise = ({ slug, publicSshKey, privateSshKey }) =>
  bitriseApi.post(`/apps/${slug}/register-ssh-key`, {
    auth_ssh_private_key: privateSshKey,
    auth_ssh_public_key: publicSshKey,
    // eslint-disable-next-line id-length
    is_register_key_into_provider_service: false
  });

const finishBitrise = ({ slug, bitriseOrganizationSlug }) =>
  bitriseApi.post(`/apps/${slug}/finish`, {
    config: 'default-react-native-config',
    envs: {},
    mode: 'manual',
    project_type: 'react-native',
    stack_id: 'osx-xcode-11.4.x',
    organization_slug: bitriseOrganizationSlug
  });

const loadYmlToBitrise = ({ slug, bitriseYml }) =>
  bitriseApi.post(`/apps/${slug}/bitrise.yml`, {
    app_config_datastore_yaml: bitriseYml
  });

const loadWebHook = ({ slug }) => bitriseApi.post(`/apps/${slug}/register-webhook`);

const setAuthenticationHeaders = ({ gitToken, bitriseToken, provider }) => {
  bitriseApi.setHeaders({
    Authorization: bitriseToken
  });
  gitApi[provider].setHeaders({
    Authorization: gitToken
  });
};

module.exports = async function createBitriseApp(values) {
  setAuthenticationHeaders(values);
  console.log('creating bitrise app...'.green.bold);
  const slugData = await createApp(values);
  console.log('Registering ssh key on github...'.green.bold);
  await createSshGit(values);
  const { slug } = slugData.data;
  const newValues = {
    ...values,
    slug
  };
  console.log('Registering ssh key on bitrise...'.green.bold);
  await registerSshKeyOnBitrise(newValues);
  console.log('last step to create bitrise api...'.green.bold);
  await finishBitrise(newValues);
  console.log('Loading yml file to bitrise...'.green.bold);
  await loadYmlToBitrise(newValues);
  console.log('adding webhook to github...'.green.bold);
  await loadWebHook(newValues);
};
