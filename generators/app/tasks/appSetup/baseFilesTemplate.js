module.exports = function baseFilesTemplate() {
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
  this.fs.copy(this.templatePath('main.js'), this.destinationPath(this.projectName, 'main.js'));
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
};
