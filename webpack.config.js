const path = require('path');
const fs = require("fs");
const glob = require("glob");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV || "debug";
const config = (config => Object.assign({}, config.base, config[env]))(require("./config/config.build"));

module.exports = {
	entry: {
		index: path.join(__dirname, config.root, config.entry),
		vendor: config.vendor
	},
	output: {
		path: path.join(__dirname, config.releasePath, config.publicPath),
		publicPath: config.publicPath,
		filename: env === 'debug' ? '[name].js' : '[name].[hash:8].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ["babel-loader?presets[]=es2015"],
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{ 
				test: /\.less$/, 
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
				// loader: "ExtractTextPlugin.extract('css?source-map!less?source-map!autoprefixer?browsers=last 2 versions')" 
			},
			{ 
				test: /\.(jpe?g|png|gif|svg)$/, 
				loaders: [
					'file?hash=sha512&digest=hex&name=/images/[name].[hash:8].[ext]'
				] 
			}
		]
	},
	vue: {
		loaders: {
			less: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!less-loader'),
		}
	},
	resolve: {
		extensions: ["", ".js", ".json", ".vue", ".less"]
	},
	plugins: [
		new ExtractTextPlugin(env === 'debug' ? '[name].css' : '[name].[hash:8].css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: env === 'debug' ? '[name].js' : '[name].[hash:8].js'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			except: ["$super", "$", "exports", "require"]
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, config.root, config.template),
			filename: "../index.html",
			inject:true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devServer: {
		port: config.port,
		hot: true,
		inline: true
	}
}