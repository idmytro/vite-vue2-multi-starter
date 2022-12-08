module.exports = {
  processors: [
    [
      '@mapbox/stylelint-processor-arbitrary-tags',
      {
        fileFilterRegex: [/\.vue$/],
      },
    ],
  ],
  extends: 'stylelint-config-standard-scss',
  rules: {
    'no-empty-first-line': null,
    'no-empty-source': null,

    /** @see https://github.com/simonsmith/stylelint-selector-bem-pattern/issues/23 */
    'selector-class-pattern': '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
  },
};
