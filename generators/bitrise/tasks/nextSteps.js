require('colors');

module.exports = function nextSteps() {
  console.log(`\n       ${'NEXT STEPS!'.bold.underline.white}       \n`);
  console.log(
    'Remember to check this folder and look after the private and public key generated for Bitrise'.bold
      .underline.red
  );
  console.log('Move those files to a safe place and remove them from this folder.'.bold.underline.red);
  console.log('\n\n');
};
