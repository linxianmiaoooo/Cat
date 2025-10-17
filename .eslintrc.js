module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {}
};