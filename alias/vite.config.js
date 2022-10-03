import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

// const path = require('path');
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [vue()],
});
