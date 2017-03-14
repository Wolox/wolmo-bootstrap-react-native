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
};
