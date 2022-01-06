# KickOff Guide

## Create a new Project

To create a new project, you must follow these steps:

1) Clone [Wolmo’s Bootstrap project](https://github.com/Wolox/wolmo-bootstrap-react-native)

2) go to the cloned repository folder and run

```bash
yarn
```

3) In case you have Cocoapods pre-installed, first update the repository with:

```bash
pod repo update
```

4) Go to the folder in which you’d like your project to be in and run:

```js
yo path-to-wolmo/generators/app/index.js
```

In case you need to debug it, you can add the `--verbose` param:


```js
yo path-to-wolmo/generators/app/index.js --verbose
```

5) Follow the wizard

## Repository

Ask an EM to provide an SSH url from the project’s repository, you’ll need it later.

## Metrics DB

Ask an EM to create the project inside Wolox’s project database. For that he/she will need both the **repository link** and access to the **project’s Jira**.

## Bitrise Configuration

**Note**: Bitrise is the default CI we use. If the project won't be using Bitrise, you must translate the bitrise configuration into the other CI's format, so you may disregard the next part except for the contents of the `bitrise.yml`

To configure bitrise you must follow some steps. First of all, you must complete the `bitriseInfo.json` in `path-to-wolmo/generators/bitrise/`. Follow [this guide](https://docs.google.com/document/d/1zMKs4oH5iXD5RpkX9Oh2F8BX3ekPbJKnWcOPQYcvQpI/edit?usp=sharing) to do so (at the moment this guide is in spanish, in the future we’ll translate it). Regarding `projectPath`, set it to `'.'`.

**Important**: Once bitrise is configured, don’t forget to remove the contents of the `bitriseInfo.json`

Once that file is filled with the correct data, move to `path-to-your-project` and run `yo path-to-wolmo/generators/bitrise/bitrise.js`. This will configure bitrise for you, and you’ll be able to go to Bitrise and see the created project.

After the initial configuration, we’ll change both the `bitrise.yml` from the project as well as the `bitrise.yml` from Bitrise itself.

From Bitrise, go to *Workflow → bitrise.yml* and replace the contents with the following:

```yml
---
format_version: 1.4.0
default_step_lib_source: https://github.com/bitrise-io/bitrise-steplib.git
trigger_map:
- push_branch: stage
  workflow: metrics
- push_branch: development
  workflow: primary
- push_branch: master
  workflow: primary
- pull_request_source_branch: "*"
  workflow: primary
  pull_request_target_branch: development
- pull_request_source_branch: "*"
  workflow: primary
  pull_request_target_branch: stage
- pull_request_source_branch: "*"
  workflow: primary
  pull_request_target_branch: master
- tag: android-*-*.*.*
  workflow: android
- tag: ios-*-*.*.*
  workflow: ios
workflows:
  _run_from_repo:
    steps:
    - activate-ssh-key:
        run_if: '{{getenv "SSH_RSA_PRIVATE_KEY" | ne ""}}'
    - git-clone: {}
    - script:
        title: continue from repo
        inputs:
        - content: |-
            #!/bin/bash
            set -ex
            bitrise run "${BITRISE_TRIGGERED_WORKFLOW_ID}"
  metrics:
    steps:
    - activate-ssh-key:
        run_if: '{{getenv "SSH_RSA_PRIVATE_KEY" | ne ""}}'
    - git-clone: {}
    - script:
        inputs:
        - content: |-
            #!/usr/bin/env bash
            #!/usr/bin/env bash
            # fail if any commands fails
            set -e
            # debug log
            set -x
            metrics_folder=${BITRISE_SOURCE_DIR:="."}/.metrics

            function cloneMetricsRepo () {
              git clone --single-branch --branch master https://${GITHUB_WOLOX_CI_USER}:${GITHUB_WOLOX_CI_PASSWORD}@github.com/Wolox/mobile-project-metrics.git ${metrics_folder}
            }

            cloneMetricsRepo
            sh ${metrics_folder}/metrics.sh
    envs:
    - GIT_URL: <Project's repository URL>
    - STAGING_BRANCH: stage
    - PRODUCTION_BRANCH: master
    - FIREBASE_PRODUCTION_PROJECT_ID: ''
    - FIREBASE_STAGE_PROJECT_ID: ''
    - FIREBASE_ANDROID_STAGE_APP: ''
    - FIREBASE_ANDROID_PRODUCTION_APP: ''
    - FIREBASE_IOS_STAGE_APP: ''
    - FIREBASE_IOS_PRODUCTION_APP: ''
    - PROJECT_NAME: <Project Name>
    - PROJECT_TYPE: react_native
    - ENV_TEMPLATE_NAME: ".dev.env"
    - KEYSTORE_NAME: <A Keystore name>
    - GOOGLE_SERVICES_NAME: google-services-qa.json
    - RELEASE_COMMAND: assembleQaRelease
    - ENV_TEMPLATE: <Env template in Base64>
    - APK_PATH: qa/release/app-qa-release.apk
  primary:
    after_run:
    - _run_from_repo
  android:
    after_run:
    - _run_from_repo
  ios:
    after_run:
    - _run_from_repo
app:
  envs:
  - opts:
      is_expand: false
    PRETTY_TITLE: <Project's display name>
```

**Note**: Replace all variables with `<>` with the correct values from your project.
**Note 2**: For `ENV_TEMPLATE`, copy the contents of your env files (`.dev.env`, `.stage.env`, etc.), change the values for dummy values and run `tar -czvf /tmp/environment.tar.gz .*.env && base64 /tmp/environment.tar.gz` to get the value you need. **NEVER** use the real values.

Now you must finish setting up variables for metrics configuration. For that, follow our [Metrics repository’s README](https://github.com/Wolox/mobile-project-metrics) from the point where it explains how to set Google Cloud metrics. For the github user values, ask an EM.

The last step is to setup the project’s `bitrise.yml`. Remove the contents of your `bitrise.yml` inside the project and copy the following:

```yml
---
format_version: '8'
default_step_lib_source: https://github.com/bitrise-io/bitrise-steplib.git
project_type: react-native
workflows:
  android:
    steps:
      - activate-ssh-key:
          run_if: '{{getenv "SSH_RSA_PRIVATE_KEY" | ne ""}}'
      - git-clone: {}
      - script:
          inputs:
            - content: |-
                #!/bin/bash
                set -e
                set -x
                ################################################# Function
                function extract_base64 () {
                  cd $2
                  echo $1 | base64 -D | tar -xz
                }
                function build () {
                  #Default PATH
                  cd $PATH_PROJECT

                  #Yarn install
                  yarn

                  #RBENV
                  rbenv local 2.6.5
                  rbenv global 2.6.5

                  #Install bundler
                  gem install bundler
                }
                function android () {
                  #Build Function
                  build

                  #Default PATH for Android
                  cd $PATH_PROJECT/android/

                  #bundle install
                  bundle install

                  case $1 in
                    qa)
                      bundle exec fastlane android distribute_qa version_name:$2 build_number:$3
                      ;;
                    stage)
                      bundle exec fastlane android distribute_stage version_name:$2 build_number:$3
                      ;;
                    prod)
                      bundle exec fastlane android distribute_production version_name:$2 build_number:$3
                      ;;
                  *)
                      echo -n "android: unknown"
                      exit 1
                  ;;
                  esac

                  echo -n "Successfully uploaded version "$2" build "$3
                }
                ################################################ Variables
                PATH_PROJECT="$HOME/git/"
                ci_environment=$(echo $BITRISE_GIT_TAG | awk -F "-" '{print $2}')
                ci_device=$(echo $BITRISE_GIT_TAG | awk -F "-" '{print $1}')
                ci_version=$(echo $BITRISE_GIT_TAG | awk -F "-" '{print $3}')
                ci_build_number=$(git rev-list --count HEAD) #Count the commits of the current branch

                ################################################ Main script
                extract_base64 ${gradle_properties_tar_gz} $HOME
                extract_base64 ${environment_tar_gz} ${PATH_PROJECT}
                extract_base64 ${keystore_tar_gz} ${PATH_PROJECT}
                extract_base64 ${GoogleServices_tar_gz} ${PATH_PROJECT}

                ${ci_device} ${ci_environment} ${ci_version} ${ci_build_number}
  ios:
    steps:
      - activate-ssh-key:
          run_if: '{{getenv "SSH_RSA_PRIVATE_KEY" | ne ""}}'
      - git-clone: {}
      - script:
          inputs:
            - content: |-
                #!/bin/bash
                set -e
                set -x
                ################################################# Function
                function extract_base64 () {
                  cd $2
                  echo $1 | base64 -D | tar -xz
                }
                function build () {
                  #Default PATH
                  cd $PATH_PROJECT

                  #Yarn install
                  yarn

                  #RBENV
                  rbenv local 2.6.5
                  rbenv global 2.6.5

                  #Install bundler
                  gem install bundler
                }
                function ios () {
                  #Build Function
                  build

                  #Default PATH for iOS
                  cd $PATH_PROJECT/ios/

                  #Pod install
                  pod install

                  #bundle install
                  bundle install

                  case $1 in
                    qa)
                      bundle exec fastlane ios release_qa $2
                      ;;
                    stage)
                      bundle exec fastlane ios release_stage $2
                      ;;
                    prod)
                      bundle exec fastlane ios release_production $2
                      ;;
                  *)
                      echo -n "ios: unknown"
                      exit 1
                  ;;
                  esac
                }
                ################################################ Variables
                PATH_PROJECT="$HOME/git/"
                ci_environment=$(echo $BITRISE_GIT_TAG | awk -F "-" '{print $2}')
                ci_device=$(echo $BITRISE_GIT_TAG | awk -F "-" '{print $1}')
                ci_version=$(echo $BITRISE_GIT_TAG | awk -F "-" '{print $3}')

                ################################################ Main script
                extract_base64 ${gradle_properties_tar_gz} $HOME
                extract_base64 ${environment_tar_gz} ${PATH_PROJECT}
                extract_base64 ${keystore_tar_gz} ${PATH_PROJECT}
                extract_base64 ${GoogleServices_tar_gz} ${PATH_PROJECT}

                ${ci_device} ${ci_environment} ${ci_version}
  primary:
    steps:
      - activate-ssh-key:
          run_if: '{{getenv "SSH_RSA_PRIVATE_KEY" | ne ""}}'
      - git-clone: {}
      - yarn:
          inputs:
            - command: install
      - yarn:
          inputs:
            - command: run lint -f json -o lintreport.json
      - yarn:
          inputs:
            - command: run check-types
      - yarn:
          inputs:
            - command: test
app:
  envs:
    - PROJECT_LOCATION: android
    - MODULE: app
    - VARIANT: release
    - BITRISE_PROJECT_PATH: ios/<workspace folder name>.xcworkspace
    - BITRISE_SCHEME: <workspace scheme, usually project's name>
    - BITRISE_EXPORT_METHOD: ad-hoc
    - RUNNING_ON_CI: true
    - FASTLANE_USER: ios-si@wolox.com.ar
    - GIT_URL: https://github.com/Wolox/apple-certificates.git
meta:
  bitrise.io:
    machine_type: elite
```

**Note**: Replace all variables with `<>` with the correct values from your project.

## Test CI and metrics

In order to test if the CI worked correctly, you just need to push to a remote branch and wait for it to run on Bitrise. Check that this task succeeds.

To test that metrics are working, make sure you have a `stage` branch, and then create a PR between any branch and `stage`. A new task should appear on Bitrise that shows `metrics` as the workflow being run. Check that this task succeeds.


