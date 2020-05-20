module.exports = {
    env: {
        'jest/globals': true
    },
    extends: ['airbnb-typescript-prettier', 'plugin:jest/recommended'],
    plugins: ['jest'],
    rules: {
        'import/prefer-default-export': 'off',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error'
    }
};
