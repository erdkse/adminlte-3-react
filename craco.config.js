const CracoAlias = require('craco-alias');
// eslint-disable-next-line import/no-extraneous-dependencies
// const {DefinePlugin} = require('webpack');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: './paths.json',
        baseUrl: './'
      }
    }
  ],
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.node = {__dirname: false};
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
        fs: false
      };
      return webpackConfig;
    }
  }
};
