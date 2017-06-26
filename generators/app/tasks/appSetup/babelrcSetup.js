module.exports = function babelrcSetup() {
  let babelrcContent = this.fs.read(`${this.projectName}/.babelrc`);
  babelrcContent = babelrcContent.replace(']', ', "react-native-dotenv"]');
  this.fs.write(`${this.projectName}/.babelrc`, babelrcContent);
};
