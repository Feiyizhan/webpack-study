var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',//配置生成Source Maps，选择合适的选项	
  entry:  __dirname + "/app/main2.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"//打包后输出文件的文件名
  },
  resolveLoader: {
        moduleExtensions: ['-loader']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css?modules'}
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
	new webpack.HotModuleReplacementPlugin()//热加载插件
  ],
  devServer: {
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
	hot: true
  }
  
}