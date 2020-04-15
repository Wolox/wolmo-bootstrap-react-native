module.exports = function addFilesToGitIgnore() {
  const gitIgnoreFile = this.fs.read(`${this.projectName}/.gitignore`);
  let updatedGitIgnoreFile = gitIgnoreFile.concat('\n# History (vs code)\n.history\n');
  updatedGitIgnoreFile = updatedGitIgnoreFile.concat('\n# Env\n/*.env\n');
  updatedGitIgnoreFile = updatedGitIgnoreFile.concat('\n# Mac noise\n.DS_Store\n');
  updatedGitIgnoreFile = updatedGitIgnoreFile.concat('\n# Fastlane noise\n*/report.xml\n');
  if (
    this.features.crashlytics ||
    this.features.firebaseanalytics ||
    this.features.pushnotifications ||
    this.features.firebaseperformance
  ) {
    updatedGitIgnoreFile = updatedGitIgnoreFile.concat(
      '\n# Google Services files\nandroid/app/google-services/\ngoogle-services.json\nios/GoogleServices\nGoogleService-Info.plist\n'
    );
  }
  this.fs.write(`${this.projectName}/.gitignore`, updatedGitIgnoreFile);
};
