module.exports = function pushNotificationsFeatureFiles() {
  // src/redux/pushNotificationHandlers.js
  this.fs.copy(
    this.templatePath('src', 'redux', 'pushNotificationHandlers.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'pushNotificationHandlers.js')
  );
  // src/services/PushNotificationsService.js
  this.fs.copy(
    this.templatePath('src', 'services', 'PushNotificationsService.js'),
    this.destinationPath(this.projectName, 'src', 'services', 'PushNotificationsService.js')
  );
  // src/config/PushNotifications.js
  this.fs.copy(
    this.templatePath('src', 'config', 'PushNotifications.js'),
    this.destinationPath(this.projectName, 'src', 'config', 'PushNotifications.js')
  );
};
