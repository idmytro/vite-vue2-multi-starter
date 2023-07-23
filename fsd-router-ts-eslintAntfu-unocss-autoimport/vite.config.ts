import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        // 'vue',
        'vue-router',
      ],
      dts: true,
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
})
