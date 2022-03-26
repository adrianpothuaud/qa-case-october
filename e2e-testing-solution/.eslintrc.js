module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'google',
    'plugin:import/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'plugins': [
    'import',
  ],
  'rules': {
    'indent': ['error', 2],
    'key-spacing': ['error', { 'afterColon': true }],
    'keyword-spacing': ['error', { 'after': true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': ['error', { 'alphabetize': { order: 'asc' }, 'groups': ['builtin', 'external', 'internal'], 'newlines-between': 'always' }],
    'linebreak-style': ['error', 'unix'],
    'max-len': 'off',
    'new-cap': 'off',
    'no-invalid-this': 'off',
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'never'],
  },
}
