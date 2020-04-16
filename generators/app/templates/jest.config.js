module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'png', 'jpg'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup/setupEnzyme.js'],
  transformIgnorePatterns: [
    '/node_modules/@react-native-community/async-storage/(?!(lib))',
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@react-native-firebase/app)'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js'
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
    '<rootDir>/__tests__/setup/',
    '<rootDir>/__tests__/redux/store.js',
    '<rootDir>/__tests__/redux/utils.js',
    '<rootDir>/__tests__/responses/'
  ]
};
