import type { StorybookConfig } from '@storybook/vue-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // '@storybook/test',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: 'storybook-addon-manual-mocks/vite',
      options: {
        mocksFolder: '__mocks__',
      },
    },
  ],
  framework: {
    name: '@storybook/vue-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
