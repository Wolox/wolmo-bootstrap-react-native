module.exports = function disableLandscapeOrientation() {
  const androidManifestContent = this.fs.read(`${this.projectName}/android/app/src/main/AndroidManifest.xml`);
  androidManifestContent.replace(
    '</application>',
    '<meta-data android:name="com.dieam.reactnativepushnotification.notification_channel_name"\nandroid:value="@string/default_notification_channel_id"/>\n<meta-data  android:name="com.dieam.reactnativepushnotification.notification_channel_description"\nandroid:value="@string/default_notification_channel_description"/>\n<meta-data  android:name="com.dieam.reactnativepushnotification.notification_color"\nandroid:resource="@color/white"/>\n<meta-data android:name="com.google.firebase.messaging.default_notification_icon"\nandroid:resource="@mipmap/ic_notification" />\n<meta-data android:name="com.google.firebase.messaging.default_notification_color"\nandroid:resource="@color/white" />\n\n<service\nandroid:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService"\nandroid:exported="false" >\n<intent-filter>\n<action android:name="com.google.firebase.MESSAGING_EVENT" />\n</intent-filter>\n</service>\n</application>'
  );
  this.fs.write(`${this.projectName}/android/app/src/main/AndroidManifest.xml`, androidManifestContent);
};
