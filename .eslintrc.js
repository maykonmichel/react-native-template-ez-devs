module.exports = {
  'extends': ['airbnb', 'prettier'],
  'plugins': ['prettier'],
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'prettier/prettier': ['error']
  },
  'globals': {
    'fetch': false
  }
};
