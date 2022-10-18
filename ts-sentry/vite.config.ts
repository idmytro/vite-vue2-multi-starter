import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue2';
import type { ViteSentryPluginOptions } from 'vite-plugin-sentry';
import viteSentry from 'vite-plugin-sentry';

const { version } = require('./package.json');

const sentry = (env) => {
  const {
    VITE_SENTRY_TOKEN,
    VITE_SENTRY_ORG,
    VITE_SENTRY_PROJECT,
  } = env;

  const sentryConfig: ViteSentryPluginOptions = {
    url: 'https://sentry.io',
    authToken: VITE_SENTRY_TOKEN,
    org: VITE_SENTRY_ORG,
    project: VITE_SENTRY_PROJECT,
    release: version,
    deploy: {
      env: 'production',
    },
    setCommits: {
      auto: true,
    },
    sourceMaps: {
      include: ['./dist/assets'],
      ignore: ['node_modules'],
      urlPrefix: '~/assets',
    },
  };

  return viteSentry(sentryConfig);
};

export default ({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  return defineConfig({
    plugins: [
      vue(),
      sentry(env),
    ],
    build: {
    /* required: tells vite to create source maps */
      sourcemap: true,
    },
  });
};
