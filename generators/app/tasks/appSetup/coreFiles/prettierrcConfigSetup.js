module.exports = function babelConfigSetup() {
  const contentPrettierConfig = this.fs.read(`${this.projectName}/.prettierrc.js`);

  const beforeContentPrettier = `bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',`;

  const newContentPrettier = `bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid'`;

  const updatedPrettierConfig = contentPrettierConfig.replace(beforeContentPrettier, newContentPrettier);

  this.fs.write(`${this.projectName}/.prettierrc.js`, updatedPrettierConfig);
};
