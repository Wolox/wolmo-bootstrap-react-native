function addDotenvPluginAndRNScreen() {
  const buildGradleContent = this.fs.read(`${this.projectName}/android/app/build.gradle`);
  let updatedBuildGradleContent = buildGradleContent.replace(
    'apply plugin: "com.android.application"',
    'apply plugin: "com.android.application"\napply from: project(\':react-native-config\').projectDir.getPath() + "/dotenv.gradle"'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'enableHermes: false,',
    'enableHermes: true,'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'versionName "1.0"',
    'versionName "1.0"\n\t\tmultiDexEnabled true'
  );
  updatedBuildGradleContent = updatedBuildGradleContent.replace(
    'if (enableHermes) {',
    "implementation 'androidx.appcompat:appcompat:1.2.0-alpha03'\n\timplementation 'androidx.multidex:multidex:2.0.1'\n\tif (enableHermes) {"
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
  addDotenvPluginAndRNScreen.bind(this)();
  addRNGestureHandlerConfig.bind(this)();
};
