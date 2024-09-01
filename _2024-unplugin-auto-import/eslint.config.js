import antfu from '@antfu/eslint-config'

export default antfu(
  {
  // unocss: true,
  },
  {
    extends: ['./.eslintrc-auto-import.json'],
  },
)
