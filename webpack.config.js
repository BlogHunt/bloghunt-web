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
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
   ]
  },
  devServer: {
    proxy: {
      '/api*': {
        target: 'http://bloghunt.herokuapp.com',
        secure: false,
        changeOrigin: true,
        rewrite: function(req) {
          req.url = req.url.replace(/^\/api/, '');
        }
      },
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './bloghunt/index.jade'
    })
  ]
}
