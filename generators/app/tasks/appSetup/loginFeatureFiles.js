module.exports = function loginFeatureFiles() {
  // src/redux/authHandlers.js
  this.fs.copy(
    this.templatePath('src', 'redux', 'authHandlers.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'authHandlers.js')
  );
  // src/services/AuthService.js
  this.fs.copy(
    this.templatePath('src', 'services', 'AuthService.js'),
    this.destinationPath(this.projectName, 'src', 'services', 'AuthService.js')
  );
  // src/screens/home/HomeContainer.js
  this.fs.copyTpl(
    this.templatePath('src', 'screens', 'home', 'HomeContainer.js'),
    this.destinationPath(this.projectName, 'src', 'screens', 'home', 'HomeContainer.js'),
    { projectName: this.projectName, features: this.features }
  );
  // src/screens/login/LoginContainer.js
  this.fs.copy(
    this.templatePath('src', 'screens', 'login', 'LoginContainer.js'),
    this.destinationPath(this.projectName, 'src', 'screens', 'login', 'LoginContainer.js')
  );
  // src/screens/login/Login.js
  this.fs.copy(
    this.templatePath('src', 'screens', 'login', 'Login.js'),
    this.destinationPath(this.projectName, 'src', 'screens', 'login', 'Login.js')
  );
  // src/screens/login/Login.styles.js
  this.fs.copy(
    this.templatePath('src', 'screens', 'login', 'Login.styles.js'),
    this.destinationPath(this.projectName, 'src', 'screens', 'login', 'Login.styles.js')
  );
};
