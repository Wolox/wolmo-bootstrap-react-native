require('colors');

const { CRASHLYTICS_LINKS, PUSH_NOTIFICATIONS_SETUP_LINK } = require('../constants');

module.exports = function nextSteps() {
  console.log(`\n       ${'NEXT STEPS!'.bold.underline.white}       \n`);
  // introduction message
  console.log(
    `● Your project folder has been created and it already includes the kickoff commit. ${`cd ${this
      .projectName}/`.italic}`.cyan
  );
  if (this.repoUrl) {
    // remote repository initialized
    console.log(`● All this boilerplate has already been pushed to ${this.repoUrl}`.cyan);
  }

  // fabric
  console.log(
    `● Fabric and crashlytics are two ${'MANDATORY'.bold
      .underline} tools in every react-native project in Wolox.`.cyan
  );
  console.log('  Follow these guides in order to complete their installation:'.cyan);
  console.log(`    ${CRASHLYTICS_LINKS.IOS_INSTALL.cyan.underline}`);
  console.log(`    ${CRASHLYTICS_LINKS.ANDROID_INSTALL.cyan.underline}`);
  console.log(`    ${CRASHLYTICS_LINKS.RN_INSTALL.cyan.underline}`);
  console.log('  (*) Remember to ask your team lead for the Fabric token'.cyan);

  if (this.features.pushnotifications) {
    // push notifications setup
    console.log(
      '● The push notification config has been added to the project but you still need to manually link the ios library.'
        .cyan
    );
    console.log(`  Further instructions can be found here: ${PUSH_NOTIFICATIONS_SETUP_LINK.underline}`.cyan);
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
