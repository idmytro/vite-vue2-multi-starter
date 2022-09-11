module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': 0,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        '*/vite.config.js',
        '*/windi.config.js',
      ],
    }],
  },
};
