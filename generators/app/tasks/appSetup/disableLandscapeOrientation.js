module.exports = function disableLandscapeOrientation() {
  let iosInfoPlistContent = this.fs.read(`${this.projectName}/ios/${this.projectName}/Info.plist`);
  iosInfoPlistContent = iosInfoPlistContent.replace(
    '<string>UIInterfaceOrientationLandscapeLeft</string>',
    ''
  );
  iosInfoPlistContent = iosInfoPlistContent.replace(
    '<string>UIInterfaceOrientationLandscapeRight</string>',
    ''
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}/Info.plist`, iosInfoPlistContent);

  const androidManifestContent = this.fs.read(`${this.projectName}/android/app/src/main/AndroidManifest.xml`);
  androidManifestContent.replace(
    'android:name=".MainApplication"',
    'android:name=".MainApplication"\nandroid:screenOrientation="portrait"\n'
  );
  this.fs.write(`${this.projectName}/android/app/src/main/AndroidManifest.xml`, androidManifestContent);
};
