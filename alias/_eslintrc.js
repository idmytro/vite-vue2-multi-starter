module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: [
          '.js',
          '.json',
          '.vue',
          '.css',
        ],
      },
    },
  },
};
