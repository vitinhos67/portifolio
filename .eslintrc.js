module.exports = {
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'vue/require-default-prop': 'off',
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/html-indent': 0,
    },
    globals: {
        _: true,
    },
}
