module.exports = {
  env: { jest: true, browser: true },
  extends: [
    'airbnb-base',
    'plugin:security/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    //
    'prettier', // prettier needs to be in the end
    //
    ...['./rules/prettier'].map(require.resolve),
    ...['./rules/general'].map(require.resolve),
  ],
  globals: {
    JSX: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'security',
    'no-secrets',
    'unicorn',
    'sonarjs',
    'prettier',
  ],
  // This is to avoid import/no-unresolved errors
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
