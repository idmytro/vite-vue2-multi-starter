module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@antfu',
    '@unocss',
  ],
  rules: {
    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
  },
}
