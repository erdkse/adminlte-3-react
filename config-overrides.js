const {alias, aliasJest, configPaths} = require('react-app-rewire-alias');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

const aliasMap = configPaths('./paths.json');

const isDevelopment = process.env.NODE_ENV !== 'production';
const PUBLIC = path.join(__dirname, 'public');
const SRC = path.join(__dirname, 'src');

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);

module.exports = function override(config, env) {
  config.node = {__dirname: false};
  config.plugins = [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(PUBLIC, 'index.html'),
      favicon: path.join(PUBLIC, 'favicon.ico')
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: ''
    })
  ].filter(Boolean);
  config.resolve = {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json')
      })
    ],
    fallback: {
      ...config.resolve.fallback,
      fs: false
    }
  };
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.m?js/,
      type: 'javascript/auto'
    },
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false
      }
    },
    {
      test: /\.json$/,
      type: 'json'
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      exclude: /node_modules/,
      use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
    }
  ];
  return config;
};
