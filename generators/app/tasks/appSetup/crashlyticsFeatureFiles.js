function addConfigToAndroidFiles() {
  let buildGradleContent = this.fs.read(`${this.projectName}/android/build.gradle`);
  buildGradleContent = buildGradleContent.replace(
    'jcenter()',
    "jcenter()\n\t\tmaven {\n\t\t\turl 'https://maven.fabric.io/public'\n\t\t}"
  );
  buildGradleContent = buildGradleContent.replace(
    '// NOTE: Do not place your application dependencies here; they belong',
    "classpath 'io.fabric.tools:gradle:1.+'\n\t\t// NOTE: Do not place your application dependencies here; they belong"
  );
  this.fs.write(`${this.projectName}/android/build.gradle`, buildGradleContent);

  let appBuildGradleContent = this.fs.read(`${this.projectName}/android/app/build.gradle`);
  appBuildGradleContent = appBuildGradleContent.replace(
    'apply plugin: "com.android.application"',
    'apply plugin: "com.android.application"\napply plugin: \'io.fabric\'\n\ncrashlytics {\n\tenableNdk true\n}\n'
  );
  this.fs.write(`${this.projectName}/android/app/build.gradle`, appBuildGradleContent);
}

module.exports = function crashlyticsFeatureFiles() {
  addConfigToAndroidFiles.bind(this)();
};
