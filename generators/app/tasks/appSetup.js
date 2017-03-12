const ora = require('ora');

module.exports = function () {
  const spinner = ora({ spinner: 'bouncingBall', text: 'Creating project boilerplate' }).start();

  // ----------------     add package.json scripts     ----------------
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

  // ----------------     eslint config file     ----------------
  this.fs.copy(
    this.templatePath('.eslintrc.js'),
    this.destinationPath(this.projectName, '.eslintrc.js')
  );

  // ----------------     base app files     ----------------
  this.fs.copy(
    this.templatePath('src', 'config', 'api.js'),
    this.destinationPath(this.projectName, 'src', 'config', 'api.js')
  );
  this.fs.copy(
    this.templatePath('src', 'config', 'index.js'),
    this.destinationPath(this.projectName, 'src', 'config', 'index.js')
  );
  this.fs.copy(
    this.templatePath('src', 'redux', 'store.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'store.js')
  );
  this.fs.copy(
    this.templatePath('main.js'),
    this.destinationPath(this.projectName, 'main.js')
  );
  this.fs.copyTpl(
    this.templatePath('src', 'config', 'ReactotronConfig.ejs'),
    this.destinationPath(this.projectName, 'src', 'config', 'ReactotronConfig.js'),
    { projectName: this.projectName }
  );
  this.fs.copyTpl(
    this.templatePath('index.android.ejs'),
    this.destinationPath(this.projectName, 'index.android.js'),
    { projectName: this.projectName }
  );
  this.fs.copyTpl(
    this.templatePath('index.ios.ejs'),
    this.destinationPath(this.projectName, 'index.ios.js'),
    { projectName: this.projectName }
  );
  this.fs.copyTpl(
    this.templatePath('src', 'App.ejs'),
    this.destinationPath(this.projectName, 'src', 'App.js'),
    { projectName: this.projectName }
  );

  spinner.succeed('Boilerplate ready!');
}
