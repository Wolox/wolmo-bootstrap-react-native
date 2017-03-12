module.exports = function baseFilesTemplate() {
  // src/config/api.js
  this.fs.copy(
    this.templatePath('src', 'config', 'api.js'),
    this.destinationPath(this.projectName, 'src', 'config', 'api.js')
  );
  // src/config/index.js
  this.fs.copy(
    this.templatePath('src', 'config', 'index.js'),
    this.destinationPath(this.projectName, 'src', 'config', 'index.js')
  );
  // src/redux/store.js
  this.fs.copy(
    this.templatePath('src', 'redux', 'store.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'store.js')
  );
  // main.js
  this.fs.copy(this.templatePath('main.js'), this.destinationPath(this.projectName, 'main.js'));
  // src/config/ReactotronConfig.js
  this.fs.copyTpl(
    this.templatePath('src', 'config', 'ReactotronConfig.ejs'),
    this.destinationPath(this.projectName, 'src', 'config', 'ReactotronConfig.js'),
    { projectName: this.projectName }
  );
  // index.android.js
  this.fs.copyTpl(
    this.templatePath('index.android.ejs'),
    this.destinationPath(this.projectName, 'index.android.js'),
    { projectName: this.projectName }
  );
  // index.ios.js
  this.fs.copyTpl(
    this.templatePath('index.ios.ejs'),
    this.destinationPath(this.projectName, 'index.ios.js'),
    { projectName: this.projectName }
  );
  // src/App.js
  this.fs.copyTpl(
    this.templatePath('src', 'App.ejs'),
    this.destinationPath(this.projectName, 'src', 'App.js'),
    { projectName: this.projectName }
  );
  // src/utils/constants.js
  this.fs.copy(
    this.templatePath('src', 'utils', 'constants.js'),
    this.destinationPath(this.projectName, 'src', 'utils', 'constants.js')
  );
  // src/utils/reduxUtils.js
  this.fs.copy(
    this.templatePath('src', 'utils', 'reduxUtils.js'),
    this.destinationPath(this.projectName, 'src', 'utils', 'reduxUtils.js')
  );
  // test/utils/reduxUtils.spec.js
  this.fs.copy(
    this.templatePath('test', 'utils', 'reduxUtils.spec.js'),
    this.destinationPath(this.projectName, 'test', 'utils', 'reduxUtils.spec.js')
  );
  // test/.eslintrc.js
  this.fs.copy(
    this.templatePath('test', '.eslintrc.js'),
    this.destinationPath(this.projectName, 'test', '.eslintrc.js')
  );
};
