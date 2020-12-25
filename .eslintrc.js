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
    plugins: ['react'],
    settings: {
        react: {
            version: 'detect'
        }
        // 'import/resolver': {
        //     alias: {
        //         'import/resolver': {
        //             node: {
        //                 moduleDirectory: ['node_modules', 'src']
        //             },
        //             webpack: {
        //                 config: `${__dirname}/craco.config.js`
        //             }
        //         }
        //     }
        // }
    },
    rules: {
        'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
        'react/jsx-props-no-spreading': ['off'],
        'jsx-a11y/label-has-associated-control': ['error', {assert: 'either'}],
        indent: 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-curly-newline': 'off',
        'react/prop-types': 'off',
        'import/no-unresolved': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ]
    }
};
