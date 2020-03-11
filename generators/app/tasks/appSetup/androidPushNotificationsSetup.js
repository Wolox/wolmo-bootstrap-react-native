module.exports = function androidPushNotificationsSetup() {
  const androidManifestContent = this.fs.read(`${this.projectName}/android/app/src/main/AndroidManifest.xml`);
  androidManifestContent.replace(
    '</application>',
    '\t<meta-data android:name="com.dieam.reactnativepushnotification.notification_channel_name"\n\tandroid:value="@string/default_notification_channel_id"/>\n<meta-data  android:name="com.dieam.reactnativepushnotification.notification_channel_description"\n\tandroid:value="@string/default_notification_channel_description"/>\n<meta-data  android:name="com.dieam.reactnativepushnotification.notification_color"\n\tandroid:resource="@color/white"/>\n<meta-data android:name="com.google.firebase.messaging.default_notification_icon"\n\tandroid:resource="@mipmap/ic_notification" />\n<meta-data android:name="com.google.firebase.messaging.default_notification_color"\n\tandroid:resource="@color/white" />\n\n<service\n\tandroid:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService"\nandroid:exported="false" >\n\t<intent-filter>\n\t<action android:name="com.google.firebase.MESSAGING_EVENT" />\n</intent-filter>\n</service>\n\n</application>'
  );
  this.fs.write(`${this.projectName}/android/app/src/main/AndroidManifest.xml`, androidManifestContent);
};
