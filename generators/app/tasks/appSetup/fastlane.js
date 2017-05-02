module.exports = function fastlane() {
  const gitIgnoreContent = this.fs.read(`${this.projectName}/.gitignore`);
  this.fs.write(`${this.projectName}/.gitignore`, gitIgnoreContent.concat('\n*.dSYM.zip'));

  this.fs.copyTpl(this.templatePath('Gemfile'), this.destinationPath(this.projectName, 'Gemfile'));

  this.fs.copyTpl(
    this.templatePath('fastlane', 'Appfile.ejs'),
    this.destinationPath(this.projectName, 'fastlane', 'Appfile'),
    {
      projectName: this.projectName
    }
  );

  this.fs.copyTpl(
    this.templatePath('fastlane', 'Fastfile.ejs'),
    this.destinationPath(this.projectName, 'fastlane', 'Fastfile'),
    {
      projectName: this.projectName
    }
  );

  this.fs.copyTpl(
    this.templatePath('fastlane', 'Matchfile.ejs'),
    this.destinationPath(this.projectName, 'fastlane', 'Matchfile'),
    {
      projectName: this.projectName
    }
  );
};
