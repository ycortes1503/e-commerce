const webpack = require('webpack');
const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../src'),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  );

  return config;
};
