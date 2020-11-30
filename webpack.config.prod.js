const path = require('path')
const glob = require('glob')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')

const rules = [
  {
    test: /\.s?css$/,
    loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  },
  {
    test: /mobile.header.jpg/,
    loaders: [
      {
        loader: 'url-loader',
        options: {
          name: 'assets/[name].[contenthash:8].[ext]',
          limit: 100000,
        },
      },
    ],
  },
  {
    test: /\.(jpe?g|eot|svg|ttf|woff|woff2)$/,
    exclude: /mobile.header.jpg/,
    loaders: [
      {
        loader: 'url-loader',
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
  mode: 'production',

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
    new PurgeCSSPlugin({
      paths: glob.sync(`src/**/*`, { nodir: true }),
      safelist: {
        standard: [/^col-/],
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'myflutes.[contenthash:8].css',
      minimize: true,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: false,
    }),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `src/index.html`,
      compile: true,
      inject: true,
      scriptLoading: 'defer',
    }),
    new HtmlInlineCssWebpackPlugin(),
    // new PreloadWebpackPlugin(),
  ],
}
