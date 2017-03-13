require('colors');

module.exports = function reactNativeLink() {
  console.log(`\n       ${'NEXT STEPS!'.bold.underline.white}       \n`);
  console.log(
    `● Your project folder has been created and it already includes the kickoff commit. ${`cd ${this.projectName}/`.italic}`.cyan
  );
  if (this.repoUrl) {
    console.log(`● All this boilerplate has already been pushed to ${this.repoUrl}`.cyan);
  }
  if (this.features.pushnotifications) {
    console.log(
      `● The push notification config has been added to the project but you still need to manually link the ios library. Further instructions can be found here: ${'https://facebook.github.io/react-native/docs/pushnotificationios.html'.underline}`.cyan
    );
  }
};
