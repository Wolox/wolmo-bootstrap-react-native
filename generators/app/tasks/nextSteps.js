require('colors');

const { PUSH_NOTIFICATIONS_SETUP_LINK } = require('../constants');

module.exports = function nextSteps() {
  console.log(`\n       ${'NEXT STEPS!'.bold.underline.white}       \n`);
  // introduction message
  console.log(
    `● Your project folder has been created and it already includes the kickoff commit. ${
      `cd ${this.projectName}/`.italic
    }`.cyan
  );
  if (this.repoUrl) {
    // remote repository initialized
    console.log(`● All this boilerplate has already been pushed to ${this.repoUrl}`.cyan);
  }

  // firebase
  if (this.features.crashlytics) {
    console.log(
      '  (*) Remember to ask your team lead for the google services file, this file must be replaced for the corresponding application of https://console.firebase.google.com'
        .cyan
    );
  }
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

  if (this.features.bitrise) {
    // bitrise next steps
    console.log(
      'Remember to check this folder and look after the private and public key generated for Bitrise'.bold
        .underline.red
    );
    console.log('Move those files to a safe place and remove them from this folder.'.bold.underline.red);
  }

  console.log('\n\n');
};
