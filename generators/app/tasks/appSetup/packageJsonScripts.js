module.exports = function packgeJsonScripts() {
  const packageJson = this.fs.readJSON(this.destinationPath(this.projectName, 'package.json'));
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts.lint = 'eslint .';
  packageJson.scripts['lint-fix'] = 'eslint . --fix';
  packageJson.scripts.clean = 'rm -rf $TMPDIR/react-* && watchman watch-del-all && npm cache clean';
  packageJson.scripts['clean:android'] = 'cd android/ && ./gradlew clean';
  packageJson.scripts[
    'force-clean'
  ] = 'rm -rf $TMPDIR/react-* && watchman watch-del-all && rm -rf ios/build && rm -rf node_modules/ && npm cache clean && npm i';
  packageJson.scripts.coverage = 'jest --coverage';
  packageJson.scripts['android:build'] = 'cd android && ./gradlew assembleRelease';
  packageJson.scripts[
    'android:install'
  ] = 'cd android && ./gradlew assembleRelease && ./gradlew installRelease';
  packageJson.scripts.precommit = 'npm run lint';
  this.fs.writeJSON(this.destinationPath(this.projectName, 'package.json'), packageJson);
};
