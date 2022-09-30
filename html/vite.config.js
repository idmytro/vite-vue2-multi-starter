import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

process.env.VITE_APP_TITLE = '| html-env';

export default defineConfig({
  plugins: [
    vue(),
    VitePluginHtmlEnv({
      prefix: '{{',
      suffix: '}}',
    }),
  ],
});
