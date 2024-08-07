import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetWind({
      preflight: false,
    }),
  ],
  rules: [
    [/^font-size-([\.\d]+)$/, ([_, v]) => ({ fontSize: `${v}` })],
  ]
})
