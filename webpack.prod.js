const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const clientConfig = merge(common.client, {
  mode: 'production',
});

module.exports = [clientConfig]