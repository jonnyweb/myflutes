const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const extractLess = new ExtractTextPlugin({
  filename: "[name].css",
  publicPath: '/',
});

const rules = [
  {
    test: /\.less$/,
    use: extractLess.extract({
      use: [
        { loader: "css-loader" },
        { loader: "less-loader" }
      ],
      fallback: "style-loader"
    })
  },
  {
    test: /\.(jpg)$/,
    loader: 'file-loader?name=[path][name].[ext]&context=src/'
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader?name=fonts/[name].[ext]'
  },
  {
    test: /\.(js|es6)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'stage-0']
    }
  }
];

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'myflutes.js',
  },

  module: {
    rules: rules,
    noParse: /__tests__/,
  },

  plugins: [
    extractLess
  ],
};

