module.exports = function packgeJsonScripts() {
  const packageJson = this.fs.readJSON(this.destinationPath(this.projectName, 'package.json'));
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts.coverage = 'jest --coverage';
  packageJson.scripts.clean = 'rm -rf $TMPDIR/react-* && watchman watch-del-all && npm cache clean';
  packageJson.scripts['force-clean'] =
    'npm run android:clean && rm -rf $TMPDIR/react-* && watchman watch-del-all && rm -rf ios/build && rm -rf node_modules/ && npm cache clean && npm i';
  packageJson.scripts['android:clean'] = 'cd android/ && ./gradlew clean';
  packageJson.scripts['android:build'] = 'cd android && ./gradlew clean && ./gradlew assembleRelease';
  packageJson.scripts['android:install'] =
    'cd android && ./gradlew clean && ./gradlew assembleRelease && ./gradlew installRelease';
  this.fs.writeJSON(this.destinationPath(this.projectName, 'package.json'), packageJson);
};
