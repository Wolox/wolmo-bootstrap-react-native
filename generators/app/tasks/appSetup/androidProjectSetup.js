module.exports = function addDotenvPlugin() {
  const buildGradleContent = this.fs.read(`${this.projectName}/android/app/build.gradle`);
  const updatedBuildGradleContent = buildGradleContent.replace(
    'apply plugin: "com.android.application"',
    'apply plugin: "com.android.application"\napply from: project(\':react-native-config\').projectDir.getPath() + "/dotenv.gradle"'
  );

  this.fs.write(`${this.projectName}/android/app/build.gradle`, updatedBuildGradleContent);
};
