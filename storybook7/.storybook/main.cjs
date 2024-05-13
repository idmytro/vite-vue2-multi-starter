const { resolve } = require('path');
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue-vite',
    options: {},
  },
  // features: {
  //   previewMdx2: true,
  // },
  async viteFinal(config, { configType }) {
    // Demonstrates use of mergeConfig and resolve.alias as an array
    return mergeConfig(config, {
      resolve: {
        alias: [{ find: '@assets', replacement: resolve(__dirname, '..', 'stories', 'assets') }],
      },
      optimizeDeps: {
        include: [
          '@storybook/vue/dist/esm/client/preview/config',
          '@storybook/vue/dist/esm/client/docs/config',
          '@storybook/addon-docs/preview.js',
          '@storybook/addon-actions/preview.js',
          '@storybook/addon-backgrounds/preview.js',
          '@storybook/addon-measure/preview.js',
          '@storybook/addon-outline/preview.js',
        ],
      },
    });
  },
};
