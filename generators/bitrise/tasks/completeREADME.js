const fs = require('fs');

module.exports = function completeREADME() {
  const localReadme = fs.readFileSync(`${this.templatePath()}/../../bitrise/bitriseREADME.md`).toString();
  const readmeFile = fs.readFileSync(`${this.configInfo.projectPath}/README.md`).toString();
  fs.writeFileSync(`${this.configInfo.projectPath}/README.md`, readmeFile.concat(localReadme));
};
