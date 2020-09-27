const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rules = [
  {
    test: /\.s?css$/,
    loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  },
  {
    test: /\.(jpg)$/,
    loader: 'file-loader?name=[path][name].[ext]&context=src/',
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader?name=fonts/[name].[ext]',
  },
  {
    test: /\.(js)$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader',
  },
];

module.exports = {
  entry: './src/index.js',
  mode: 'development',

  devServer: {
    contentBase: './public',
    hot: true,
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'myflutes.prod.js',
  },

  module: {
    rules: rules,
    noParse: /__tests__/,
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: `src/template.html`,
      template: `!!prerender-loader?string!src/template.html`,
    }),
  ],
};
