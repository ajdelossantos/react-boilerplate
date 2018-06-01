let path = require('path');
let nodeExternals = require('webpack-node-externals');
let mode = 'development';

const HtmlWebPackPlugin = require('html-webpack-plugin');

const moduleObj = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
};

const client = {
  entry: {
    'client': './src/client/index.js'
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  devtool: "source-map",
  module: moduleObj,
  mode: mode,
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/index.html'
    })
  ]
};

const server = {
  entry: {
    'server': './src/server/index.js'
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  module: moduleObj,
  externals: [nodeExternals()],
  mode: mode
};

module.exports = [client, server];