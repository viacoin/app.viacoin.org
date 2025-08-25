module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    cssnano: {
      safe: true,
      discardComments: { removeAll: true }
    }
  }
};