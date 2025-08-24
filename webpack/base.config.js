const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(process.cwd(), './src/viacoin'),
  },
  output: {
    filename: '[name].bundle.[chunkhash].js',
    path: path.join(process.cwd(), 'build')
  },
  resolve: {
    modules: ['./node_modules', './src'],
    extensions: [ '.js', '.css' ]
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        include: path.join(process.cwd(), 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css|sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: path.join(process.cwd(), './src/vars.sass')
              }
            }
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[md5:hash].[ext]'
          }
        }
      },
      {
        test: /\.(json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
    new CleanWebpackPlugin(['build'], {
      root: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      title: 'Viacoin',
      template: path.resolve(process.cwd(),'./src/template.html'),
    }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
    new GoogleFontsPlugin({
      fonts: [
        { family: "Montserrat", variants: ["300", "400", "600", "900"] },
        { family: "Roboto", variants: ["400", "500", "700"] }
      ]
    }),
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(process.cwd(),'./config.json'),
        to: 'config.json',
        toType: 'file'
      },
      { from: './src/components/team/pictures/', to: './team/' },
      { from: './src/components/layout/resources/pictures/', to: './resources/' },
      { from: './src/components/layout/intro/pictures/', to: './intro/' },
      { from: './src/components/layout/resources/pictures/', to: './resources/' },
      { from: './src/components/layout/vendors/pictures/', to: './vendors/' }
    ])
  ]
};
