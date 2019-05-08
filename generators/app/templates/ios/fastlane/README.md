fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios release_qa
```
fastlane ios release_qa
```
Before doing anything else.

After all the steps have completed succesfully.

If there was an error.

New release to iTunes Connect for QA (Alpha). This lane will never update the version, only the build number.
### ios release_stage
```
fastlane ios release_stage
```
New release to iTunes Connect for AppStore (Release) in Wolox account.

Parameters:

- bump_type (optional): represents the type of deploy. If not specified, the user will be asked for it.
### ios release_production
```
fastlane ios release_production
```
New release to iTunes Connect for AppStore (Production) in third party account.

Parameters:

- bump_type (optional): represents the type of deploy. If not specified, the user will be asked for it.
### ios create_development_app
```
fastlane ios create_development_app
```
Creates the `App ID` and `Provisioning Profile` for the configurations mapped to `:dev` and `:qa`.
### ios create_stage_app
```
fastlane ios create_stage_app
```
Creates the `App ID` and `Provisioning Profile` for the configuration mapped to `:stage`.
### ios create_production_app
```
fastlane ios create_production_app
```
Creates the `App ID` and `Provisioning Profile` for the configuration mapped to `:production`.
### ios generate_push_certificates_development
```
fastlane ios generate_push_certificates_development
```
Generates the push notifications certificates for the build configurations mapped to `:dev` and `:qa`.
### ios generate_push_certificates_stage
```
fastlane ios generate_push_certificates_stage
```
Generates the push notifications certificates for the build configurations mapped to `:stage`.
### ios generate_push_certificates_production
```
fastlane ios generate_push_certificates_production
```
Generates the push notifications certificates for the build configurations mapped to `:production`.
### ios download_development_certificates
```
fastlane ios download_development_certificates
```
Updates or downloads the `Certificates` and `Provisioning Profiles` for the configurations mapped to `:dev` and `:qa`.
### ios download_stage_certificates
```
fastlane ios download_stage_certificates
```
Updates or downloads the `Certificates` and `Provisioning Profiles` for the configurations mapped to `:stage`.
### ios download_production_certificates
```
fastlane ios download_production_certificates
```
Updates or downloads the `Certificates` and `Provisioning Profiles` for the configurations mapped to `:production`.
### ios recreate_development_certificates
```
fastlane ios recreate_development_certificates
```
Updates or downloads the `Certificates` and `Provisioning Profiles` for the configurations mapped to `:dev` and `:qa`.
### ios recreate_stage_certificates
```
fastlane ios recreate_stage_certificates
```
Updates or downloads the `Certificates` and `Provisioning Profiles` for the configurations mapped to `:stage`.
### ios recreate_production_certificates
```
fastlane ios recreate_production_certificates
```
Updates or downloads the `Certificates` and `Provisioning Profiles` for the configurations mapped to `:production`.
### ios test
```
fastlane ios test
```
Executes the tests for the project using `scan`. This lane uses the configuration mapped to `:dev`.
### ios add_device
```
fastlane ios add_device
```
Adds a new device and regenerates the development `Provisioning Profile` to include it.

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
