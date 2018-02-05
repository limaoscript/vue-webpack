const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    //以便更容易查看要修补(patch)的依赖
    new webpack.NamedModulesPlugin(),
    //允许在运行时更新各种模块，而无需进行完全刷新
    new webpack.HotModuleReplacementPlugin(),
    //每次构建清除dist目录
    new CleanWebpackPlugin(['dist']),
    //自动根据bundle生成html
    new HtmlWebpackPlugin({
      title: 'vue+webpack'
    })
  ]
};