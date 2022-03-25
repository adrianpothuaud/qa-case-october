module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'jest/globals': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'plugins': ['jest'],
  'rules': {
    'max-len': ['error', 250],
  },
};
