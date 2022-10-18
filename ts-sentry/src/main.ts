import Vue from 'vue';
import 'virtual:vite-plugin-sentry/sentry-config';
import { Integrations } from '@sentry/tracing';
import { init } from '@sentry/vue';
import App from './App.vue';
import { version as release } from '../package.json';

import './style.css';

const {
  VITE_SENTRY_DSN,
  VITE_SENTRY_HOSTNAME,
} = import.meta.env;

init({
  Vue,
  dsn: VITE_SENTRY_DSN,
  environment: 'production',
  release,
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: [
        'localhost',
        VITE_SENTRY_HOSTNAME,
        /^\//,
      ],
    }),
  ],
  tracesSampleRate: 1.0,
  tracingOptions: {
    trackComponents: true,
  },
  attachProps: true,
});

Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
});
