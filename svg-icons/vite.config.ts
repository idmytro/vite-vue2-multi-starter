import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
// import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
// import { default as svgSpritePlugin } from 'vite-plugin-svg-sprite-component';
// import svgSpritePlugin from 'vite-plugin-svg-sprite-component';
// const svgSpritePlugin = require('vite-plugin-svg-sprite-component');

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export function configSvgIconsPlugin(isBuild: boolean) {
  const svgIconsPlugin = createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
    svgoOptions: isBuild,
    // default
    symbolId: 'icon-[dir]-[name]',
  });
  return svgIconsPlugin;
}

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [
  //   vue(),

  //   svgSpritePlugin({ symbolId: (name)=> "icon-" + name }),

  //   // createSvgSpritePlugin({
  //   //   symbolId: '[name]',
  //   // }),
  // ],

  plugins: [
    // svgSpritePlugin({
    //   symbolId: (name) => `icon-${name}`,
    //   component: { type: 'vue' },
    // }),
    configSvgIconsPlugin(true),
    vue(),
  ],
});
