module.exports = function babelrcSetup() {
  this.fs.extendJSON(`${this.projectName}/.babelrc`, {
    plugins: [
      'import-glob',
      [
        'module-resolver',
        {
          root: './src',
          alias: {
            '@app': './src/app',
            '@components': './src/app/components',
            '@config': './src/config',
            '@constants': './src/constants',
            '@redux': './src/redux',
            '@screens': './src/app/screens',
            '@services': './src/services',
            '@utils': './src/utils'
          }
        }
      ]
    ]
  });
};
