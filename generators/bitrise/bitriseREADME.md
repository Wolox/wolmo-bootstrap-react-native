
# Bitrise

This documentation shows how to integrate your React Native project with [Bitrise](https://bitrise.io).

## Prerequisites

- You need access to a [Bitrise](https://bitrise.io) account

## Convert secret variables to base64:

All the files that are necessary to deploy:

- `.env` files
- Google services files for both Android and iOS
- Android keystore
- Android Gradle properties

These files need to be stored in environment variables in Bitrise.

For this process you need to perform some steps from the terminal in bash.

In the next example, we will move the .env files to Bitrise

### 1) Convert .env files to base64:

Go to the root folder of your project and run this command:

```bash
tar -czvf /tmp/environment.tar.gz .*.env && base64 /tmp/environment.tar.gz
```

This command will convert all the .env files of the project and print something like this:

```
a .dev.env
a .production.env
a .stage.env

H4sIAB2Rcl4AA-0SwU7DMAyGd+5TRLnTpavpULVuPAAnXmAyabpEa5MqcTd4e7K2EJAY0pAQQup3cWL9dmL5B1M5qysVXce8E6wFbZiTnjXwYnsMoTdC7bxwUpr4uW0W18M5z7OMnOMqz4fIl+N9IMs4SdW8TVd5dpsnhC/TLE0WhP/gravpPYILX9//EeDGovL+mCrK6/6TQt7jP2G9DTslR+m8tqakScwpkUbYSpt9SXusb+7odhOtH2UDqI/yYbAFCUXGFzCap6QKsSsY80LJFnw85WNh22Csw+CnKUcjQqZjYZ2WBkPb88vhC6gFNB8Fowd3J12hKmkLGJzYgQtFX6iU1HuFl2VPIA57Z3tTlYTev2WFbaxjJ6VR0jAm+zznJvrr/czMzMz8Fq/N2GtmAAgdAA==
```

Copy the code, well'll need it in the next step.

To convert other files, replace `.*.env` with the files you want to convert.

\*In case the command doesn't print anything, check if you have `base64` installed.

### 2) Export the code to a Bitrise Secret variable:

1. Go to your project in [bitrise.io](https://bitrise.io)
2. In the Secrets tab add a base64 variable named `environment_tar_gz`
3. Paste the code created in Step 1
4. Save changes

### 3) Extract the secret variable in the bitrise script (bitrise.yml):

We need to extract the `environment_tar_gz` variable in the building process, so we add this in the build script

```bash
cd  ${DIRECTORY_TO_EXTRACT}
echo  ${environment_tar_gz} | base64 -D | tar -xz
```

Or we can use this function in bash:

```bash
function  extract_base64 () {
	cd  $2
	echo  $1 | base64 -D | tar -xz
}

extract_base64 ${environment_tar_gz}  ${DIRECTORY_TO_EXTRACT}
```

In our example, we need to extract the .env files in the root folder, so we add

`extract_base64 ${environment_tar_gz} $HOME/git/`

## Deploy using Bitrise:

To deploy a new version of the app in Android or iOS we need to create a tag from a specific branch.

Example of how to create a deploy to the development environment:

1. Move to the `development` branch:
2. Set variables for the device, environment and version of the new build
3. Create a new tag using the variables
4. Push the new tag

```bash
git checkout development

git pull origin development

DEVICE=android

ENVIRONMENT=qa

VERSION=1.0.0

FEATURE=`feature name (e.g., "login")`

git tag -a $DEVICE-$ENVIRONMENT-$VERSION-$FEATURE -m "Comment about the release" && git push origin $DEVICE-$ENVIRONMENT-$VERSION-$FEATURE
```

Or directly:

```bash
git checkout development

git pull origin development

git tag -a android-qa-1.0.0-login -m "Comment about the release" && git push origin android-qa-1.0.0-login
```

### Possible values:

These are the supported values for each variable of the TAG:

- DEVICE: `android` or `ios`

- ENVIRONMENT: `qa` `stage` or `prod`

- VERSION: Given a version number MAJOR.MINOR.PATCH, you should increment:

1. MAJOR when you make incompatible API changes.
2. MINOR when you add functionality in a backwards-compatible manner.
3. PATCH when you make backwards-compatible bug fixes or small changes

- FEATURE: name of the feature or release that you are going to deploy

---
