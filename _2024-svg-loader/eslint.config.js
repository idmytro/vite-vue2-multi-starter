import antfu from '@antfu/eslint-config'
import noAutofix from 'eslint-plugin-no-autofix'

export default antfu(
  {
    plugins: {
      'no-autofix': noAutofix,
    },
  },
  {
    rules: {
      'style/space-before-function-paren': [
        2,
        {
          anonymous: 'always',
          named: 'always',
          asyncArrow: 'always',
        },
      ],
      'ts/prefer-function-type': 2,

      'unused-imports/no-unused-imports': 0, // look below
      'no-autofix/unused-imports/no-unused-imports': 2,
    },
  },
)
