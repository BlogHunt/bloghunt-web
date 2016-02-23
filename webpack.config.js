var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./bloghunt'],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.jade$/,
        loader: 'jade'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './bloghunt/index.jade'
    })
  ]
}
