const bitriseApi = require('../apis/bitriseApiConfig');
const githubApi = require('../apis/githubApiConfig');
const gitlabApi = require('../apis/gitlabApiConfig');
const bitbucketApi = require('../apis/bitbucketApiConfig');

const gitApi = {
    github: githubApi,
    gitlab: gitlabApi,
    bitbucket: bitbucketApi
}

const createApp = async ({repoUrl, isPublic, gitOwner, provider, repoSlug, type}) => {
    return await bitriseApi.post('/apps/register', {
        git_owner: gitOwner,
        is_public: isPublic,
        provider: provider,
        repo_url: repoUrl,
        git_repo_slug: repoSlug,
        type: type
      })
}

const createSshOnBitbucket = async (repoSlug, publicSshKey) => {
    const userResponse = await gitApi.bitbucket.get('/user/keys');
    const user = userResponse.data.username;
    return await gitApi.bitbucket.post(`/users/${user}/ssh-keys`, {
        label: `bitrise-${repoSlug}`,
        key: publicSshKey
    })
    
}
const createSshGit = async ({repoSlug, publicSshKey, provider}) => { // IMPORTANT -> GITLAB AND GITHUB HAVE THE SAME EP
    if(provider === 'bitbucket') 
        return await createSshOnBitbucket(repoSlug, publicSshKey);
    else
        return await gitApi[provider].post('/user/keys', {
            title: `bitrise-${repoSlug}`,
            key: publicSshKey
        })
}

const registerSshKeyOnBitrise = async ({slug, publicSshKey, privateSshKey}) => {
    return await bitriseApi.post(`/apps/${slug}/register-ssh-key`, {
        auth_ssh_private_key: privateSshKey,
        auth_ssh_public_key: publicSshKey,
        is_register_key_into_provider_service: false
      })
}

const finishBitrise = async ({slug}) => {
    return await bitriseApi.post(`/apps/${slug}/finish`, {
        config: 'default-react-native-config',
        envs: {PROJECT_LOCATION: 'android', MODULE: 'app', VARIANT: 'release', BITRISE_PROJECT_PATH: `ios/${this.projectName}.xcworkspace`, BITRISE_SCHEME: 'TiKit', BITRISE_EXPORT_METHOD: 'app-store'},
        mode: 'manual',
        project_type: "react-native",
        stack_id: "osx-xcode-10.2.x"
      })
}
const loadYmlToBitrise = async ({slug, bitriseYml}) => {
    return await bitriseApi.post(`/apps/${slug}/bitrise.yml`, {
        app_config_datastore_yaml: bitriseYml
      })
}

const loadWebHook = async ({slug}) => {
    return await bitriseApi.post(`/apps/${slug}/register-webhook`);
}

const setAuthenticationHeaders = ({gitToken, bitriseToken, provider}) => {
    bitriseApi.setHeaders({
        Authorization: bitriseToken
    });
    gitApi[provider].setHeaders({
        Authorization: gitToken
    });
}

module.exports = async function createBitriseApp(values){
    setAuthenticationHeaders(values);
    const slugData = await createApp(values);
    await createSshGit(values);
    const slug = slugData.data.slug;
    const newValues = {
        ...values,
        slug
    };
    await registerSshKeyOnBitrise(newValues);
    await finishBitrise(newValues);
    await loadYmlToBitrise(newValues);
    await loadWebHook(newValues);
}
