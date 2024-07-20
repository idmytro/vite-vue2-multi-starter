import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetWind from '@unocss/preset-wind'
import presetUno from '@unocss/preset-uno'



export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    // presetUno(),
    presetWind({
      preflight: false,
    }),
  ],
})
