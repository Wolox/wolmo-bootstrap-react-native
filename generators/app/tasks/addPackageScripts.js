
// function to be binded to yeoman context
module.exports = function () {
  console.log('Adding package.json scripts...'.cyan);

  const package = this.fs.readJSON(this.destinationPath(this.projectName, 'package.json'));

  package.scripts = package.scripts || {};
  package.scripts['clean'] = "rm -rf $TMPDIR/react-* && watchman watch-del-all && npm cache clean";
  package.scripts['clean:android'] = "cd android/ && ./gradlew clean";
  package.scripts['force-clean'] = "rm -rf $TMPDIR/react-* && watchman watch-del-all && rm -rf ios/build && rm -rf node_modules/ && npm cache clean && npm i";
  package.scripts['coverage'] = "jest --coverage";
  package.scripts['android:build'] = "cd android && ./gradlew assembleRelease";
  package.scripts['android:install'] = "cd android && ./gradlew assembleRelease && ./gradlew installRelease";

  this.fs.writeJSON(this.destinationPath(this.projectName, 'package.json'), package);
}
