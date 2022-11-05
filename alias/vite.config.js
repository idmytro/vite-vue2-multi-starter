import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

import { fileURLToPath } from 'url';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
  ],
});
