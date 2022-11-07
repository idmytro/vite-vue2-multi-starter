import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    vue(),
    EnvironmentPlugin({ NODE_ENV: 'development' }),
    EnvironmentPlugin('all', { prefix: 'VUE_APP_' }),
    EnvironmentPlugin('all', { prefix: 'VITE_' }),
  ],
});
