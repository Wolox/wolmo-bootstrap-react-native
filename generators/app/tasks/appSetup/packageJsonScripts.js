module.exports = function packgeJsonScripts() {
  const packageJson = this.fs.readJSON(this.destinationPath(this.projectName, 'package.json'));
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts.android = 'react-native run-android --variant=qaDebug';
  packageJson.scripts.ios = 'react-native run-ios --scheme qa';
  packageJson.scripts.test = 'jest';
  packageJson.scripts.coverage = 'jest --coverage';
  packageJson.scripts.clean = 'rm -rf $TMPDIR/react-* && watchman watch-del-all && npm cache clean';
  packageJson.scripts['force-clean'] =
    'yarn run android:clean && rm -rf $TMPDIR/react-* && watchman watch-del-all && rm -rf ios/build && rm -rf ios/Pods && rm -rf node_modules/ && npm cache clean && yarn install && cd ios/ && pod install';
  packageJson.scripts['ios:clean'] = 'cd ios/ && rm -rf build && rm -rf Pods';
  packageJson.scripts['android:clean'] = 'cd android/ && ./gradlew clean';
  packageJson.scripts['android:build.qa'] = 'cd android && ./gradlew clean && ./gradlew assembleQaRelease';
  packageJson.scripts['android:build.stage'] =
    'cd android && ./gradlew clean && ./gradlew assembleStageRelease';
  packageJson.scripts['android:build.production'] =
    'cd android && ./gradlew clean && ./gradlew bundleProductionRelease';
  packageJson.scripts['test:watch'] = 'jest --watch';
  packageJson.scripts['test:debug'] = 'node --inspect node_modules/.bin/jest --runInBand';

  packageJson.jest.preset = 'react-native';
  packageJson.jest.setupFilesAfterEnv = ['<rootDir>__tests__/setup/setupEnzyme.js'];
  packageJson.jest.testPathIgnorePatterns = [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/setup/',
    '<rootDir>/__tests__/redux/store.js',
    '<rootDir>/__tests__/redux/utils.js',
    '<rootDir>/__tests__/responses/',
    '<rootDir>/.history/'
  ];
  packageJson.jest.transformIgnorePatterns = [
    '/node_modules/@react-native-community/async-storage/(?!(lib))'
  ];
  this.fs.writeJSON(this.destinationPath(this.projectName, 'package.json'), packageJson);
};
