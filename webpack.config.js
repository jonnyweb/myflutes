const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const rules = [
  {
    test: /\.s?css$/,
    loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  },
  {
    test: /\.(jpe?g|eot|svg|ttf|woff|woff2)$/,
    loaders: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[contenthash:8].[ext]',
          limit: 10,
        },
      },
    ],
  },
  {
    test: /\.(js)$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader',
  },
  {
    test: /src\/index.html/,
    loader: [
      {
        loader: 'prerender-loader',
        options: {
          string: true,
        },
      },
    ],
  },
]

module.exports = {
  entry: './src/index.js',
  mode: 'development',

  devServer: {
    contentBase: './',
    hot: true,
    port: 8080,
    host: 'localhost',
    liveReload: true,
    stats: { all: false, errors: true, children: false, modules: false, builtAt: true, entrypoints: true },
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'myflutes.[contenthash:8].js',
  },

  module: {
    rules: rules,
    noParse: /__tests__/,
  },

  stats: { children: false, modules: false, entrypoints: true },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      name: true,
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'myflutes.[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `src/index.html`,
      compile: true,
      inject: true,
      scriptLoading: 'defer',
    }),
  ],
}
