module.exports = function firebasePerformanceSetup() {
  let buildGradleContent = this.fs.read(`${this.projectName}/android/build.gradle`);
  buildGradleContent = buildGradleContent.replace(
    'dependencies {',
    "dependencies {\n\t\tclasspath 'com.google.firebase:perf-plugin:1.3.1'"
  );
  this.fs.write(`${this.projectName}/android/build.gradle`, buildGradleContent);

  let appBuildGradleContent = this.fs.read(`${this.projectName}/android/app/build.gradle`);
  appBuildGradleContent = appBuildGradleContent.replace(
    "apply plugin: 'com.google.gms.google-services'",
    "apply plugin: 'com.google.gms.google-services'\napply plugin: 'com.google.firebase.firebase-perf'"
  );
  this.fs.write(`${this.projectName}/android/app/build.gradle`, appBuildGradleContent);
};
