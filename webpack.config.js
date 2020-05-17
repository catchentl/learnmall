const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin   = require('mini-css-extract-plugin');


var getHtmlConfig = function(name,title){
  return {
    template    : './src/view/' + name + '.html',
    filename    : 'view/' + name + '.html',
//    favicon     : './favicon.ico',
    title       : title,
    inject      : true,
    hash        : true,
    chunks      : ['common', name]
  };
};

var config = {
  mode : 'development', //模式 默认两种模式 production development', 
  entry: {
    // app : './src/index.js',
    // print : './src/print.js'
    'index'             : ['./src/page/index/index.js'],
    'user-login'        : ['./src/page/user-login/index.js'],
  },
  output: {
    filename    : 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
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
    new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
    new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')),
  ],
  module: {
      rules : [
        {test:/\.css$/,
          use:[
              MiniCssExtractPlugin.loader,                  
              'css-loader',
              'postcss-loader',
          ]
        },
      ]
  },
}

module.exports = config;