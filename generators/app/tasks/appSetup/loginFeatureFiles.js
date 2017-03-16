module.exports = function pushNotificationsSetup() {
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
  // src/screens/dashboard/DashboardContainer.js
  this.fs.copy(
    this.templatePath('src', 'screens', 'dashboard', 'DashboardContainer.js'),
    this.destinationPath(this.projectName, 'src', 'screens', 'dashboard', 'DashboardContainer.js')
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
};
