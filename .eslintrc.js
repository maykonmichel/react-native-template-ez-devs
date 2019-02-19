module.exports = {
  'plugins': [
    'prettier',
    'jsx-control-statements'
  ],
  'extends': [
    'airbnb',
    'prettier',
    'plugin:jsx-control-statements/recommended'
  ],
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
    'jsx-control-statements/jsx-control-statements': true
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'prettier/prettier': ['error'],
    'react/jsx-no-undef': [2, { 'allowGlobals': true }],
    'jsx-control-statements/jsx-choose-not-empty': 1,
    'jsx-control-statements/jsx-for-require-each': 1,
    'jsx-control-statements/jsx-for-require-of': 1,
    'jsx-control-statements/jsx-if-require-condition': 1,
    'jsx-control-statements/jsx-otherwise-once-last': 1,
    'jsx-control-statements/jsx-use-if-tag': 1,
    'jsx-control-statements/jsx-when-require-condition': 1,
    'jsx-control-statements/jsx-jcs-no-undef': 1,
    'no-undef': 0
  },
  'globals': {
    'fetch': false
  }
};
