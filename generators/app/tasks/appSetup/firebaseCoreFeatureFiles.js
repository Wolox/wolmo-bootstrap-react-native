function addConfigToAndroidFiles() {
  let buildGradleContent = this.fs.read(`${this.projectName}/android/build.gradle`);
  buildGradleContent = buildGradleContent.replace(
    `dependencies {`,
    `dependencies {\n\tclasspath 'com.google.gms:google-services:+'`
  );
  this.fs.write(`${this.projectName}/android/build.gradle`, buildGradleContent);

  let appBuildGradleContent = this.fs.read(`${this.projectName}/android/app/build.gradle`);
  appBuildGradleContent = appBuildGradleContent.replace(
    `apply plugin: "com.android.application"`,
    `apply plugin: "com.android.application"\napply plugin: 'com.google.gms.google-services'`
  );
  appBuildGradleContent = appBuildGradleContent.replace(
    'dependencies {',
    `dependencies {\n\timplementation 'com.google.firebase:firebase-core:+'\n\timplementation ('com.google.firebase:firebase-analytics:+')`
  );
  this.fs.write(`${this.projectName}/android/app/build.gradle`, appBuildGradleContent);
}

module.exports = async function firebaseCoreFeatureFiles() {
  await addConfigToAndroidFiles.bind(this)();
  let AppDelegateContent = this.fs.read(`${this.projectName}/ios/${this.projectName}/AppDelegate.m`);
  AppDelegateContent = AppDelegateContent.replace(
    `#import "AppDelegate.h"`,
    `#import "AppDelegate.h"\n\n#import <Firebase.h>`
  );
  AppDelegateContent = AppDelegateContent.replace(
    `didFinishLaunchingWithOptions:(NSDictionary *)launchOptions`,
    `didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n\t[FIRApp configure];`
  );
  this.fs.write(`${this.projectName}/ios/${this.projectName}/AppDelegate.m`, AppDelegateContent);
};
