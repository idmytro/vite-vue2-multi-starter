import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import AutoImport from 'unplugin-auto-import/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  plugins: [
    vue(),
    AutoImport({
      imports: [
        {
          '@/works': [
            'works',
          ],
        },
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
});
