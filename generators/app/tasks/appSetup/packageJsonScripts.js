module.exports = function packgeJsonScripts() {
  const packageJson = this.fs.readJSON(this.destinationPath(this.projectName, 'package.json'));
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts.coverage = 'jest --coverage';
  packageJson.scripts.clean = 'rm -rf $TMPDIR/react-* && watchman watch-del-all && npm cache clean';
  packageJson.scripts['force-clean'] =
    'npm run android:clean && rm -rf $TMPDIR/react-* && watchman watch-del-all && rm -rf ios/build && rm -rf node_modules/ && npm cache clean && npm i';
  packageJson.scripts['android:clean'] = 'cd android/ && ./gradlew clean';
  packageJson.scripts['android:build'] = 'cd android && ./gradlew clean && ./gradlew assembleRelease';
  packageJson.scripts['android:install'] =
    'cd android && ./gradlew clean && ./gradlew assembleRelease && ./gradlew installRelease';
  packageJson.scripts.test = 'jest';
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
  packageJson.scripts.lint = 'eslint src --ext .js,.ts,.jsx,.tsx';
  packageJson.scripts['lint-fix'] = 'eslint src --ext .js,.ts,.jsx,.tsx --fix';
  packageJson.scripts['lint-diff'] =
    'git diff --name-only --cached --relative | grep -E "\\.(ts|tsx|js|jsx)$" | xargs eslint';
  packageJson.scripts.tsc = 'tsc';
  packageJson.husky = packageJson.husky || {};
  packageJson.husky.hooks = packageJson.husky.hooks || {};
  packageJson.husky.hooks['pre-commit'] = 'npm run lint-diff && npm run tsc';
  this.fs.writeJSON(this.destinationPath(this.projectName, 'package.json'), packageJson);
};
