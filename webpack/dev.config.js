const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',

  devServer: {
    inline: true,
    contentBase: path.join(process.cwd(), './build'),
    port: '3001',
    publicPath: path.join(process.cwd(), './build'),
    historyApiFallback: false,
  },

  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3001,
        proxy: 'http://localhost:3001/'
      },
      {
        reload: false
      }
    )
  ],

});
