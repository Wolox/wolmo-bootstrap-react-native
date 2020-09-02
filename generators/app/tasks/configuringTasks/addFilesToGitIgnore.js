module.exports = function addFilesToGitIgnore() {
  const gitIgnoreFile = this.fs.read(`${this.projectName}/.gitignore`);
  let updatedGitIgnoreFile = gitIgnoreFile.concat('\n# History (vs code)\n.history\n');
  updatedGitIgnoreFile = updatedGitIgnoreFile.concat('\n# Env\n/*.env\n');
  if (this.features.hasFirebase) {
    updatedGitIgnoreFile = updatedGitIgnoreFile.concat(
      '\n# Google Services files\nandroid/app/google-services/\ngoogle-services.json\nios/GoogleServices\nGoogleService-Info.plist\n'
    );
  }
  this.fs.write(`${this.projectName}/.gitignore`, updatedGitIgnoreFile);
};
