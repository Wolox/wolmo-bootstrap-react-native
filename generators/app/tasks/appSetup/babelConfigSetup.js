module.exports = function babelConfigSetup() {
  const contentBabelConfig = this.fs.read(`${this.projectName}/babel.config.js`);

  const routes = `presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@lottieAssets': './src/lottieAssets',
          '@schemas': './src/schemas',
          '@screens': './src/app/screens',
          '@services': './src/services',
          '@propTypes': './src/propTypes',
          '@redux': './src/redux',
          '@utils': './src/utils'
        }
      }
    ]
  ]`;
  const updatedBabelConfig = contentBabelConfig.replace(
    "presets: ['module:metro-react-native-babel-preset'],",
    routes
  );

  this.fs.write(`${this.projectName}/babel.config.js`, updatedBabelConfig);
};
