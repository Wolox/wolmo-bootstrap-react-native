const bitriseApi = require('../bitriseApiConfig');
const githupApi = require('../githubApiConfig');

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

const createSshGithub = async ({repoSlug, publicSshKey}) => {
    return await githupApi.post('/user/keys', {
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

module.exports = async function createBitriseApp(values){

    const slugData = await createApp(values);
    await createSshGithub(values);
    const slug = slugData.data.slug;
    const newValues = {
        ...values,
        slug
    };
    await registerSshKeyOnBitrise(newValues);
    await finishBitrise(newValues);
    const result = await loadYmlToBitrise(newValues);
    console.log(result);
}


// "git_owner": "felire",
//         "is_public": false,
//         "provider": "github",
//         "repo_url": "git@github.com:Wolox/pyg-fidelizacion-react-native.git",
//         "git_repo_slug":"pyg-fidelizacion-react-native",
//         "type": "git"

        // repoUrl,
        //                                 isPublic,
        //                                 repoSlug,
        //                                 gitOwner,
        //                                 provider,
        //                                 githubToken,
        //                                 bitriseToken,
        //                                 type: 'git',
        //                                 privateSshKey,
        //                                 publicSshKey