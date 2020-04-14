const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/********************************************************************
 *        Shared Config
 ********************************************************************/
const tsModule =   {
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        use: {
        loader: "ts-loader",
        options: { experimentalWatchApi: true },
        },
      }
    ],
  },
}

const tsResolve = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"],
    plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})]
  }
}

/********************************************************************
 *        Client Config
 ********************************************************************/
const clientConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build', 'public'),
    filename: 'dist/index.bundle.js'
  },
  target: "web",
  plugins: [
    new CopyPlugin([
      {from: 'public', to: '.'}
    ])
  ],
  ...tsModule,
  ...tsResolve,
}

/********************************************************************
 *        Exports
 ********************************************************************/
module.exports.client = clientConfig;
