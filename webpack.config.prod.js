const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const extractCss = new MiniCssExtractPlugin({
  moduleFilename: ({ name }) =>
    getModuleName(name, {
      hashed: '[name].css',
      unhashed: '[name].css',
    }),
});

const processEnv = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

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
  mode: 'production',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'myflutes.prod.js',
  },

  module: {
    rules: rules,
    noParse: /__tests__/,
  },

  plugins: [extractCss, processEnv],
};
