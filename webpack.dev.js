const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const clientConfig = merge(common.client, {
  devtool: 'inline-source-map',
  mode: "development",
});

module.exports = [clientConfig]