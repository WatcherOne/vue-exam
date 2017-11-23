// webpack作为一款模块打包器，其管理单元就是模块
// 不同的模块需要相应的loader作为加载器进行加载

const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {                     // 程序的入口
		'index': './index.js',     // 通过文件的require方式将文件打包成chunk(代码块)
		'common': ['vue']          // 通过已有的模块直接打包成chunk，有可能是第三方模块也可能直接通过npm安装的
	},
	output: {                    // 输出控制
		path: path.resolve(__dirname, './public'),          // 输出编译后的文件路径
		filename: '[name].js'      // 输出文件名，[name]表示chunk代码块叫什么就是这个名字
	},
	module: {
    rules: [
			{
				test: /\.less$/,
				// 配合‘extract-text-webpack-plugin’可以剥离，css
				use: extractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!less-loader"
				})
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
				// limit 是转换base64的文件大小的阀值8兆
				use: [
					{
						loader: 'url-loader',
						options: {
							limite: '8192'
						}
					}
				]
			},
			{
				test: /\.js$/,    
				exclude: /node_modules/,    
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
    ]
	},
	plugins: [
    new extractTextPlugin("styles.css"),   // 单独生出来的css文件名
  ]
	// resolve: {         // 解析模块功能，用来解析模块功能和一些require不方便的模块
	// 	modules: [
	// 		path.resolve(__dirname, 'src/lib')    // 模块位置
	// 	],
	// 	extensions: ['', '.js'],            // 设置扩展名，引入时可以不用.js
	// 	alias: {
	// 		'underscore': 'underscore.js',  // 设置别名 
	// 	}
	// }
}
