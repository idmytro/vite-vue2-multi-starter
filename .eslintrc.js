module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': 0,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        '**/vite.config.*',
        '**/vitest.config.*',
        '**/windi.config.*',
        '**/*.spec.*',
      ],
    }],
    'import/prefer-default-export': 0,
    'vue/first-attribute-linebreak': [2, { singleline: 'beside' }],
    'vue/max-attributes-per-line': [2, {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/max-len': 0,
  },
};
