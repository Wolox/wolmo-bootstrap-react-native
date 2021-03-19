const { defaults } = require('jest-config');

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'png', 'jpg'],
  setupFilesAfterEnv: [
    '<rootDir>/__mocks__/setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '@testing-library/jest-native/extend-expect'
  ],
  transformIgnorePatterns: [
    '/node_modules/@react-native-async-storage/async-storage/(?!(lib))',
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@react-native-firebase/app)'
  ],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js'
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
    '<rootDir>/__tests__/redux/store.js',
    '<rootDir>/__tests__/redux/utils.js',
    '<rootDir>/__tests__/responses/'
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 35,
      lines: 50,
      statements: 45
    }
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/console.js',
    '!**/node_modules/**',
    '!**/.history/**',
    '!**/build/**',
    '!**/migrations/**',
    '!**/config/**',
    '!**/scripts/**',
    '!**/app/models/**',
    '!**/test/**',
    '!**/__tests__/**',
    '!**/__mocks__/**',
    '!**/coverage/**',
    '!**/server.js',
    '!**/app/middlewares/apiInfo**'
  ]
};
