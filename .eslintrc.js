module.exports = {
  extends: ['wolox-react-native'],
  rules: {
    complexity: 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-magic-numbers': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'no-nested-ternary': 'off',
    'no-console': 'off',
    'max-statements': 'off'
  }
};
