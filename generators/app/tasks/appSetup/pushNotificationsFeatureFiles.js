module.exports = function pushNotificationsFeatureFiles() {
  // src/redux/pushNotifications/reducer.js
  this.fs.copy(
    this.templatePath('src', 'redux', 'pushNotifications', 'reducer.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'pushNotifications', 'reducer.js')
  );
  // src/redux/pushNotifications/actions.js
  this.fs.copy(
    this.templatePath('src', 'redux', 'pushNotifications', 'actions.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'pushNotifications', 'actions.js')
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
  // src/config/HuaweiPushNotifications.js
  this.fs.copy(
    this.templatePath('src', 'config', 'HuaweiPushNotifications.js'),
    this.destinationPath(this.projectName, 'src', 'config', 'HuaweiPushNotifications.js')
  );
};
