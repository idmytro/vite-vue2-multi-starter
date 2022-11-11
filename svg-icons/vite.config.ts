import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { configSvgIconsPlugin } from './build/svg'


export default ({ command }) => {
  const isBuild = command === 'build';

  return defineConfig({
    plugins: [
      configSvgIconsPlugin(isBuild),
      vue(),
    ],
  });
};
