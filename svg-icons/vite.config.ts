import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export function configSvgIconsPlugin(isBuild: boolean) {
  const svgIconsPlugin = createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
    svgoOptions: isBuild,
    symbolId: 'icon-[name]',
  });
  return svgIconsPlugin;
}

export default ({ command }) => {
  const isBuild = command === 'build';

  return defineConfig({
    plugins: [
      configSvgIconsPlugin(isBuild),
      vue(),
    ],
  });
};
