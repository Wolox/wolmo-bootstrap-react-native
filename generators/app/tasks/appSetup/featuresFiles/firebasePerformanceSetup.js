module.exports = function firebasePerformanceSetup() {
  let buildGradleContent = this.fs.read(`${this.projectName}/android/build.gradle`);
  buildGradleContent = buildGradleContent.replace(
    '// NOTE: Do not place your application dependencies here; they belong',
    "classpath 'com.google.firebase:perf-plugin:1.3.1'\n\t\t// NOTE: Do not place your application dependencies here; they belong"
  );
  this.fs.write(`${this.projectName}/android/build.gradle`, buildGradleContent);

  let appBuildGradleContent = this.fs.read(`${this.projectName}/android/app/build.gradle`);
  appBuildGradleContent = appBuildGradleContent.replace(
    "apply plugin: 'com.google.gms.google-services'",
    "apply plugin: 'com.google.gms.google-services'\napply plugin: 'com.google.firebase.firebase-perf'"
  );
  this.fs.write(`${this.projectName}/android/app/build.gradle`, appBuildGradleContent);
};
