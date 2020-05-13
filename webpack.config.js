const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

var config = {
  mode : 'development', //模式 默认两种模式 production development', 
  entry: {
    // app : './src/index.js',
    // print : './src/print.js'
    'index'  :  ['./src/page/index/index.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  resolve : {
      alias : {
        util : __dirname + '/src/util',
        page : __dirname + '/src/page',
        service : __dirname + '/src/service',
        image : __dirname + '/src/image',
      }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
  },
}

module.exports = config;