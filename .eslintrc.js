module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'unused-imports',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']}
    ],
    'react/jsx-props-no-spreading': ['off'],
    'jsx-a11y/label-has-associated-control': ['error', {assert: 'either'}],
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-curly-newline': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'no-unused-vars ': ['off'],
    'import/extensions': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'react/require-default-props': 'off'
  }
};
