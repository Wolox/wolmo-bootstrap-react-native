module.exports = function pushNotificationsSetup() {
  let iosInfoPlistContent = this.fs.read(`${this.projectName}/ios/${this.projectName}/Info.plist`);
  iosInfoPlistContent = iosInfoPlistContent.replace(
    '<key>NSLocationWhenInUseUsageDescription</key>',
    '<key>UIBackgroundModes</key>\n<array>\n\t<string>remote-notification</string>\n</array>\n<key>NSLocationWhenInUseUsageDescription</key>'
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}/Info.plist`, iosInfoPlistContent);

  let androidManifestContent = this.fs.read(`${this.projectName}/android/app/src/main/AndroidManifest.xml`);
  androidManifestContent = androidManifestContent.replace(
    '<application',
    '<uses-permission android:name="android.permission.VIBRATE" />\n\t\t<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>\n\n<application'
  );
  androidManifestContent = androidManifestContent.replace(
    '</application>',
    '\n\t\t<meta-data android:name="com.dieam.reactnativepushnotification.notification_channel_name"\n\t\t\t\tandroid:value="@string/default_notification_channel_id"/>\n\t\t\t<meta-data  android:name="com.dieam.reactnativepushnotification.notification_channel_description"\n\t\t\t\tandroid:value="@string/default_notification_channel_description"/>\n\t\t\t<meta-data android:name="com.google.firebase.messaging.default_notification_icon"\n\t\t\t\tandroid:resource="@mipmap/ic_notification" />\n\n\t\t\t<service\n\t\t\t\tandroid:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService"\n\t\t\t\tandroid:exported="false" >\n\t\t\t\t<intent-filter>\n\t\t\t\t\t<action android:name="com.google.firebase.MESSAGING_EVENT" />\n\t\t\t\t</intent-filter>\n\t\t\t</service>\n\n</application>'
  );
  androidManifestContent = androidManifestContent.replace(
    'android:name=".MainActivity"',
    'android:name=".MainActivity"\n\t\t\t\tandroid:launchMode="singleTask"'
  );
  this.fs.write(`${this.projectName}/android/app/src/main/AndroidManifest.xml`, androidManifestContent);

  let stringsContent = this.fs.read(`${this.projectName}/android/app/src/main/res/values/strings.xml`);
  stringsContent = stringsContent.replace(
    '</resources>',
    `\t\t<string name="default_notification_channel_id" translatable="false">${this.projectName}</string>\n\t\t<string name="default_notification_channel_description" translatable="false">${this.projectName}</string>\n</resources>`
  );
  this.fs.write(`${this.projectName}/android/app/src/main/res/values/strings.xml`, stringsContent);
};
