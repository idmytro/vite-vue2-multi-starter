import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
  plugins: [
    vue(),
    VueTypeImports(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
      ],
      dts: './src/auto-imports.d.ts',
    }),
    EnvironmentPlugin('all', { prefix: 'VUE_APP_' }),
    EnvironmentPlugin('all', { prefix: 'VITE_' }),
  ],
})
