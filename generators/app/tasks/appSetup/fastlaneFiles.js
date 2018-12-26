module.exports = function fastlaneFiles() {
  const gitIgnoreContent = this.fs.read(`${this.projectName}/.gitignore`);
  this.fs.write(`${this.projectName}/.gitignore`, gitIgnoreContent.concat('\n*.dSYM.zip'));

  this.fs.copyTpl(this.templatePath('Gemfile'), this.destinationPath(this.projectName, 'Gemfile'));

  this.fs.copyTpl(
    this.templatePath('fastlane', 'Fastfile.ejs'),
    this.destinationPath(this.projectName, 'fastlane', 'Fastfile'),
    {
      projectName: this.projectName,
      bundleId: this.bundleId
    }
  );

  this.fs.copy(
    this.templatePath('fastlane', 'Matchfile'),
    this.destinationPath(this.projectName, 'fastlane', 'Matchfile')
  );
};
