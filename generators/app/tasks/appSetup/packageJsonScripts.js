module.exports = function () {
  const package = this.fs.readJSON(this.destinationPath(this.projectName, 'package.json'));
  package.scripts = package.scripts || {};
  package.scripts['lint'] = 'eslint .';
  package.scripts['lint-fix'] = 'eslint . --fix';
  package.scripts['clean'] = "rm -rf $TMPDIR/react-* && watchman watch-del-all && npm cache clean";
  package.scripts['clean:android'] = "cd android/ && ./gradlew clean";
  package.scripts['force-clean'] = "rm -rf $TMPDIR/react-* && watchman watch-del-all && rm -rf ios/build && rm -rf node_modules/ && npm cache clean && npm i";
  package.scripts['coverage'] = "jest --coverage";
  package.scripts['android:build'] = "cd android && ./gradlew assembleRelease";
  package.scripts['android:install'] = "cd android && ./gradlew assembleRelease && ./gradlew installRelease";
  package.scripts['precommit'] = "npm run lint";
  this.fs.writeJSON(this.destinationPath(this.projectName, 'package.json'), package);
}
