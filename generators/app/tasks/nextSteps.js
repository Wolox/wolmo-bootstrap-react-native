require('colors');

module.exports = function reactNativeLink() {
  console.log(`\n       ${'NEXT STEPS!'.bold.underline.white}       \n`);
  // introduction message
  console.log(
    `● Your project folder has been created and it already includes the kickoff commit. ${`cd ${this.projectName}/`.italic}`.cyan
  );
  if (this.repoUrl) {
    // remote repository initialized
    console.log(`● All this boilerplate has already been pushed to ${this.repoUrl}`.cyan);
  }

  // fabric
  console.log(
    `● Fabric and crashlytics are two ${'MANDATORY'.bold.underline} tools in every react-native project in Wolox.`.cyan
  );
  console.log('  Follow these guides in order to complete their installation:'.cyan);
  console.log(`    ${'https://fabric.io/kits/ios/crashlytics/manual-install'.cyan.underline}`);
  console.log(`    ${'https://fabric.io/kits/android/crashlytics/install'.cyan.underline}`);
  console.log(`    ${'https://github.com/corymsmith/react-native-fabric#installation'.cyan.underline}`);
  console.log('  (*) Remember to ask your team lead for the Fabric token'.cyan);

  if (this.features.pushnotifications) {
    // push notifications setup
    console.log(
      '● The push notification config has been added to the project but you still need to manually link the ios library.'.cyan
    );
    console.log(
      `  Further instructions can be found here: ${'https://facebook.github.io/react-native/docs/pushnotificationios.html'.underline}`.cyan
    );
  }

  if (this.features.login) {
    // login next steps
    console.log('● A basic login feature has been added. The probably next steps there are:'.cyan);
    console.log('  Add proper validations and styles to the login form'.cyan);
    console.log('  Integrate login and logout with API'.cyan);
    console.log('  Sign up?'.cyan);
  }

  console.log('\n\n');
};
