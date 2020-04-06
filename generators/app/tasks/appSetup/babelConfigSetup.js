module.exports = function babelConfigSetup() {
  const contentBabelConfig = this.fs.read(`${this.projectName}/babel.config.js`);
  const babelContent = `presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@components': './src/app/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@screens': './src/app/screens',
          '@services': './src/services',
          '@redux': './src/redux',
          '@utils': './src/utils'
        }
      }
    ]
  ]`;
  const updatedBabelConfig = contentBabelConfig.replace(
    "presets: ['module:metro-react-native-babel-preset'],",
    babelContent
  );
  this.fs.write(`${this.projectName}/babel.config.js`, updatedBabelConfig);
};
