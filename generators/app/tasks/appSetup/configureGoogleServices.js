function configureIosGoogleServices() {
  const googleServiceContent = this.fs.read(
    this.templatePath('googleServicesConfig', 'GoogleService-Info.plist')
  );
  googleServiceContent.split('appTest').join(this.projectName);
  this.fs.write(`${this.projectName}/ios/GoogleService-Info.plist`, googleServiceContent);
}

function configureAndroidGoogleServices() {
  const googleServicesContent = this.fs.read(
    this.templatePath('googleServicesConfig', 'google-services.json')
  );
  const updateGoogleServicesContent = googleServicesContent.replace(
    'com.test',
    `com.${this.projectName.toLowerCase()}.qa`
  );
  this.fs.write(`${this.projectName}/android/app/google-services.json`, updateGoogleServicesContent);
}

module.exports = { configureAndroidGoogleServices, configureIosGoogleServices };
