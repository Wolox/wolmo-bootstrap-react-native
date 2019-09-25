function addSupportLibVersion() {
  let buildGradleContent = this.fs.read(`${this.projectName}/android/build.gradle`);
  buildGradleContent = buildGradleContent.replace(
    'targetSdkVersion = 28',
    'targetSdkVersion = 28\n\t\tsupportLibVersion = "28.0.0"'
  );
  this.fs.write(`${this.projectName}/android/build.gradle`, buildGradleContent);
}

function addDotenvPluginAndRNScreen() {
  const buildGradleContent = this.fs.read(`${this.projectName}/android/app/build.gradle`);
  let updatedBuildGradleContent = buildGradleContent.replace(
    'apply plugin: "com.android.application"',
    'apply plugin: "com.android.application"\napply from: project(\':react-native-config\').projectDir.getPath() + "/dotenv.gradle"'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'if (enableHermes) {',
    "implementation 'androidx.appcompat:appcompat:1.1.0-rc01'\n\timplementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'\n\n\tif (enableHermes) {"
  );
  this.fs.write(`${this.projectName}/android/app/build.gradle`, updatedBuildGradleContent);
}

function addRNGestureHandlerConfig() {
  const mainActivityContent = this.fs.read(
    `${this.projectName}/android/app/src/main/java/com/${this.projectName}/MainActivity.java`
  );
  let updatedMainActivityContent = mainActivityContent.replace(
    'import com.facebook.react.ReactActivity;',
    'import com.facebook.react.ReactActivity;\nimport com.facebook.react.ReactActivityDelegate;\nimport com.facebook.react.ReactRootView;\nimport com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;'
  );
  updatedMainActivityContent = updatedMainActivityContent.replace(
    `return "${this.projectName}";`,
    `return "${this.projectName}";\n\t}\n\n\t@Override\n\tprotected ReactActivityDelegate createReactActivityDelegate() {\n\t  return new ReactActivityDelegate(this, getMainComponentName()) {\n\t\t@Override\n\t\tprotected ReactRootView createRootView() {\n\t\t return new RNGestureHandlerEnabledRootView(MainActivity.this);\n\t\t}\n\t  };`
  );
  this.fs.write(
    `${this.projectName}/android/app/src/main/java/com/${this.projectName}/MainActivity.java`,
    updatedMainActivityContent
  );
}

module.exports = function androidProjectSetup() {
  addSupportLibVersion.bind(this)();
  addDotenvPluginAndRNScreen.bind(this)();
  addRNGestureHandlerConfig.bind(this)();
};
