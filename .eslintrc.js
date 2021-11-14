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
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
        'react/jsx-props-no-spreading': ['off'],
        'jsx-a11y/label-has-associated-control': ['error', {assert: 'either'}],
        indent: [2, 4],
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
        'react/function-component-definition': 'off'
    }
};
