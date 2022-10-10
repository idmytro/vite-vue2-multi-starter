import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [vue()],
  alias: [
    {
      find: '@',
      replacement: fileURLToPath(new URL('./src', import.meta.url)),
    },
    // {
    //   find: 'vue',
    //   replacement: 'vue/dist/vue.esm.js',
    // },
    {
      find: /^vue-slider-component$/,
      replacement: 'vue-slider-component/dist/vue-slider-component.umd.js',
    },
  ],
  build: {
    minify: false,
    commonjsOptions: {
      /**
       * Setting to make prod-build working with vue-slider-component
       * https://github.com/NightCatSama/vue-slider-component/issues/642
       */
      requireReturnsDefault: true,
    },
  },
});
