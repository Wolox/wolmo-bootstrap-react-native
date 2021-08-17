require('colors');

module.exports = function nextSteps() {
  console.log(`\n       ${'NEXT STEPS!'.bold.underline.white}       \n`);

  // Introduction message
  console.log(
    `● Your project folder has been created and it already includes the kickoff commit. ${
      `cd ${this.projectName}/`.italic
    }`.cyan
  );

  // Remote repository initialized
  if (this.repoUrl) {
    console.log(`● All this boilerplate has already been pushed to ${this.repoUrl}`.cyan);
  }

  // Firebase
  if (this.features.hasFirebase) {
    console.log(
      '● Remember to ask your team lead for the google services files, these files must be replaced for the corresponding application of https://console.firebase.google.com'
        .cyan
    );
    console.log(`● Remember to check the Firebase packages version in the Android's build.gradle file`.cyan);
  }

  // Login and SignUp next steps
  if (this.features.loginandsignup) {
    console.log('● A basic login and signup feature has been added. The probably next steps there are:'.cyan);
    console.log('  Add proper validations and styles to the login and signup forms'.cyan);
    console.log('  Integrate login, logout and signup with API'.cyan);
  }

  console.log('\n\n');
};
