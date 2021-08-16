require('colors');

module.exports = function nextSteps() {
  console.log(`\n       ${'NEXT STEPS!'.bold.underline.white}       \n`);
  // Introduction message
  console.log(
    `● Your project folder has been created and it already includes the kickoff commit. ${
      `cd ${this.projectName}/`.italic
    }`.cyan
  );
  if (this.repoUrl) {
    // Remote repository initialized
    console.log(`● All this boilerplate has already been pushed to ${this.repoUrl}`.cyan);
  }

  // Firebase
  if (this.features.firebasecrashlytics) {
    console.log(
      '  (*) Remember to ask your team lead for the google services file, this file must be replaced for the corresponding application of https://console.firebase.google.com'
        .cyan
    );
  }

  if (this.features.loginandsignup) {
    // Login and SignUp next steps
    console.log('● A basic login and signup feature has been added. The probably next steps there are:'.cyan);
    console.log('  Add proper validations and styles to the login form'.cyan);
    console.log('  Integrate login and logout with API'.cyan);
  }

  console.log('\n\n');
};
