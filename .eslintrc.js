module.exports = {
  extends: ['wolox-react-native'],
  rules: {
    complexity: 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'no-nested-ternary': 'off',
    'no-magic-numbers': 'off',
    'new-cap': 'off',
    'max-statements': 'off',
    'no-console': 'off'
  },
  // Ignore .ejs files for now. TODO: Search for eslint plugin for ejs
  ignorePatterns: ['*.ejs']
};
