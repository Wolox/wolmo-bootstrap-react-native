const googleServicesPod = `\nproject_path = './appTest.xcodeproj'
project = Xcodeproj::Project.open(project_path)
project.targets.each do |target|
  if target.name == "appTest"
     if  !target.shell_script_build_phases.find { |bp| bp.name == 'googleServiceRun' }
        puts "Adding run script for GoogleService-Info.plist"
        phase = target.new_shell_script_build_phase("googleServiceRun")
        phase.shell_script = "PATH_TO_CONFIG=$SRCROOT/config/GoogleService-Info.plist\\nFILENAME_IN_BUNDLE=GoogleService-Info.plist\\nBUILD_APP_DIR=$\{BUILT_PRODUCTS_DIR}/$\{PRODUCT_NAME}.app\\necho cp $PATH_TO_CONFIG \\"$BUILD_APP_DIR/$FILENAME_IN_BUNDLE\\"\\ncp $PATH_TO_CONFIG \\"$BUILD_APP_DIR/$FILENAME_IN_BUNDLE\\"\\n"
     end
  end
end
project.save()`;

function configureIosGoogleServices() {
  const newGoogleServicesPod = googleServicesPod.split('appTest').join(this.projectName);
  const podfileContent = this.fs.read(`${this.projectName}/ios/Podfile`);
  const newPodfileContent = podfileContent.concat(newGoogleServicesPod);
  this.fs.write(`${this.projectName}/ios/Podfile`, newPodfileContent);

  const googleServiceContent = this.fs.read(
    this.templatePath('googleServicesConfig', 'GoogleService-Info.plist')
  );
  googleServiceContent.split('appTest').join(this.projectName);
  this.fs.write(`${this.projectName}/ios/config/GoogleService-Info.plist`, googleServiceContent);
}

function configureAndroidGoogleServices() {
  const googleServicesContent = this.fs.read(
    this.templatePath('googleServicesConfig', 'google-services.json')
  );
  const updateGoogleServicesContent = googleServicesContent.replace('com.test', `com.${this.projectName}`);
  this.fs.write(`${this.projectName}/android/app/google-services.json`, updateGoogleServicesContent);
}

module.exports = { configureAndroidGoogleServices, configureIosGoogleServices };
