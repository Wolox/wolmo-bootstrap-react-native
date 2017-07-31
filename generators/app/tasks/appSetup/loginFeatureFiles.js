module.exports = function loginFeatureFiles() {
  // src/redux/auth/reducer.js
  this.fs.copy(
    this.templatePath('src', 'redux', 'auth', 'reducer.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'auth', 'reducer.js')
  );
  // src/redux/auth/actions.js
  this.fs.copy(
    this.templatePath('src', 'redux', 'auth', 'actions.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'auth', 'actions.js')
  );
  // src/services/AuthService.js
  this.fs.copy(
    this.templatePath('src', 'services', 'AuthService.js'),
    this.destinationPath(this.projectName, 'src', 'services', 'AuthService.js')
  );
  // src/screens/home/layout.js
  this.fs.copyTpl(
    this.templatePath('src', 'app', 'screens', 'home', 'layout.ejs'),
    this.destinationPath(this.projectName, 'src', 'app', 'screens', 'home', 'layout.js'),
    { projectName: this.projectName, features: this.features }
  );
  // src/app/screens/login/index.js
  this.fs.copy(
    this.templatePath('src', 'app', 'screens', 'login', 'index.js'),
    this.destinationPath(this.projectName, 'src', 'app', 'screens', 'login', 'index.js')
  );
  // src/app/screens/login/layout.js
  this.fs.copy(
    this.templatePath('src', 'app', 'screens', 'login', 'layout.js'),
    this.destinationPath(this.projectName, 'src', 'app', 'screens', 'login', 'layout.js')
  );
  // src/app/screens/login/styles.js
  this.fs.copy(
    this.templatePath('src', 'app', 'screens', 'login', 'styles.js'),
    this.destinationPath(this.projectName, 'src', 'app', 'screens', 'login', 'styles.js')
  );
};
