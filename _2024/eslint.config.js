import antfu from '@antfu/eslint-config'

export default antfu(
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

      'vue/custom-event-name-casing': 0,
    },
  },
)
