const { defineConfig } = require('windicss/helpers');

module.exports = defineConfig({
  preflight: false,
  plugins: [
    require('windicss-plugin-font-size'),
  ]
});
