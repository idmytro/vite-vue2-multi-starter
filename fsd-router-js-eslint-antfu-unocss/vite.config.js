import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
  ],
});
