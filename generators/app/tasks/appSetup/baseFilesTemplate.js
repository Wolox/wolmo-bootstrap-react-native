module.exports = function baseFilesTemplate() {
  // circle.yml
  this.fs.copy(this.templatePath('circle.yml'), this.destinationPath(this.projectName, 'circle.yml'));
  // README.md
  this.fs.copyTpl(this.templatePath('README.ejs'), this.destinationPath(this.projectName, 'README.md'), {
    projectName: this.projectName
  });
  // pull_request_template.md
  this.fs.copy(
    this.templatePath('pull_request_template.md'),
    this.destinationPath(this.projectName, 'pull_request_template.md')
  );
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
  this.fs.copyTpl(
    this.templatePath('src', 'redux', 'store.ejs'),
    this.destinationPath(this.projectName, 'src', 'redux', 'store.js'),
    { features: this.features }
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
    { projectName: this.projectName, features: this.features }
  );
  // src/AppNavigator.js
  this.fs.copyTpl(
    this.templatePath('src', 'AppNavigator.js'),
    this.destinationPath(this.projectName, 'src', 'AppNavigator.js'),
    { projectName: this.projectName, features: this.features }
  );
  // src/screens.ejs
  this.fs.copyTpl(
    this.templatePath('src', 'screens.ejs'),
    this.destinationPath(this.projectName, 'src', 'screens.js'),
    { projectName: this.projectName, features: this.features }
  );
  // src/screens/home/Home.js
  this.fs.copyTpl(
    this.templatePath('src', 'screens', 'home', 'Home.ejs'),
    this.destinationPath(this.projectName, 'src', 'screens', 'home', 'Home.js'),
    { projectName: this.projectName, features: this.features }
  );
  // src/screens/home/Home.styles.js
  this.fs.copyTpl(
    this.templatePath('src', 'screens', 'home', 'Home.styles.js'),
    this.destinationPath(this.projectName, 'src', 'screens', 'home', 'Home.styles.js'),
    { projectName: this.projectName, features: this.features }
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
  // src/utils/colors.js
  this.fs.copy(
    this.templatePath('src', 'utils', 'colors.js'),
    this.destinationPath(this.projectName, 'src', 'utils', 'colors.js')
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
  // .babelrc
  this.fs.copy(this.templatePath('.babelrc'), this.destinationPath(this.projectName, '.babelrc'));
};
