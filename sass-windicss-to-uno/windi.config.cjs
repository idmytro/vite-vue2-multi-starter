const { defineConfig } = require('windicss/helpers');

module.exports = defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,ts}'],
    exclude: ['node_modules', '.git', 'excluded', 'dist', 'windi.config.{ts,js}', 'tailwind.config.{ts,js}'],
  },
  preflight: false,
  plugins: [
    require('windicss-plugin-font-size'),
  ]
});
