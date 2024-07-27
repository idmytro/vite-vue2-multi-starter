import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    // presetUno(),
    presetScrollbarHide(),
  ],
  safelist: [
    'scrollbar-hide',
  ],
})
