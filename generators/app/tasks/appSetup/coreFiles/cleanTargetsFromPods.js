module.exports = function cleanTargetsFromPods() {
  let podfileContent = this.fs.read(`${this.projectName}/ios/Podfile`);
  let numberLineTargetTest = null;
  podfileContent = podfileContent.split('\n');
  podfileContent.forEach((line, index) => {
    if (line.includes(`target '${this.projectName}Tests'`)) {
      numberLineTargetTest = index;
    }
  });
  podfileContent = [
    ...podfileContent.slice(0, numberLineTargetTest),
    ...podfileContent.slice(numberLineTargetTest + 4)
  ].join('\n');
  this.fs.write(`${this.projectName}/ios/Podfile`, podfileContent);
  this.fs.delete(`${this.projectName}/ios/${this.projectName}Tests/`);
};
