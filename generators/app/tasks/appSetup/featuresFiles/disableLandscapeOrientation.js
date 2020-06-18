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

  let androidManifestContent = this.fs.read(`${this.projectName}/android/app/src/main/AndroidManifest.xml`);
  androidManifestContent = androidManifestContent.replace(
    'android:name=".MainActivity"',
    'android:name=".MainActivity"\n\t\t\t\tandroid:screenOrientation="portrait"'
  );
  this.fs.write(`${this.projectName}/android/app/src/main/AndroidManifest.xml`, androidManifestContent);
};
