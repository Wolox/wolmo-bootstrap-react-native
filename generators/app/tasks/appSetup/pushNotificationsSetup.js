module.exports = function pushNotificationsSetup() {
  let iosInfoPlistContent = this.fs.read(`${this.projectName}/ios/${this.projectName}/Info.plist`);
  iosInfoPlistContent = iosInfoPlistContent.replace(
    '<key>NSLocationWhenInUseUsageDescription</key>',
    '<key>UIBackgroundModes</key>\n<array>\n\t<string>remote-notification</string>\n</array>\n<key>NSLocationWhenInUseUsageDescription</key>'
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}/Info.plist`, iosInfoPlistContent);

  const androidManifestContent = this.fs.read(`${this.projectName}/android/app/src/main/AndroidManifest.xml`);
  androidManifestContent.replace(
    '<application',
    '<uses-permission android:name="android.permission.VIBRATE" />\n<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>\n\n<application'
  );
  androidManifestContent.replace(
    '</application>',
    '\t<meta-data android:name="com.dieam.reactnativepushnotification.notification_channel_name"\n\tandroid:value="@string/default_notification_channel_id"/>\n<meta-data  android:name="com.dieam.reactnativepushnotification.notification_channel_description"\n\tandroid:value="@string/default_notification_channel_description"/>\n<meta-data android:name="com.google.firebase.messaging.default_notification_icon"\n\tandroid:resource="@mipmap/ic_notification" />\n\n<service\n\tandroid:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService"\nandroid:exported="false" >\n\t<intent-filter>\n\t<action android:name="com.google.firebase.MESSAGING_EVENT" />\n</intent-filter>\n</service>\n\n</application>'
  );
  this.fs.write(`${this.projectName}/android/app/src/main/AndroidManifest.xml`, androidManifestContent);

  const stringsContent = this.fs.read(`${this.projectName}/android/app/src/main/res/values/strings.xml`);
  stringsContent.replace(
    '</resources>',
    `\t<string name="default_notification_channel_id" translatable="false">${this.projectName}</string>\n<string name="default_notification_channel_description" translatable="false">${this.projectname}</string>\n</resources>`
  );
  this.fs.write(`${this.projectName}/android/app/src/main/res/values/strings.xml`, stringsContent);
};
