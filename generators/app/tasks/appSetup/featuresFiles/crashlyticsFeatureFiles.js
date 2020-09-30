function addConfigToAndroidFiles() {
  let buildGradleContent = this.fs.read(`${this.projectName}/android/build.gradle`);
  buildGradleContent = buildGradleContent.replace(
    '// NOTE: Do not place your application dependencies here; they belong',
    "classpath 'com.google.firebase:firebase-crashlytics-gradle:2.2.0'\n\t\t// NOTE: Do not place your application dependencies here; they belong"
  );
  this.fs.write(`${this.projectName}/android/build.gradle`, buildGradleContent);

  let appBuildGradleContent = this.fs.read(`${this.projectName}/android/app/build.gradle`);
  appBuildGradleContent = appBuildGradleContent.replace(
    "apply plugin: 'com.google.gms.google-services'",
    "apply plugin: 'com.google.gms.google-services'\napply plugin: 'com.google.firebase.crashlytics'"
  );
  this.fs.write(`${this.projectName}/android/app/build.gradle`, appBuildGradleContent);
}

module.exports = function crashlyticsFeatureFiles() {
  addConfigToAndroidFiles.bind(this)();
};
