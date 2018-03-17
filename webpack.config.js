 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const ExtractTextPlugin = require('extract-text-webpack-plugin');
 const webpack = require('webpack');
 const extractPlugin = new ExtractTextPlugin({ filename: './assets/css/app.css' })

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		app: './app.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './assets/js/[name].bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, './dist/assets/media'),
		stats: 'errors-only',
		open: true,
		port: 12000,
		compress: true
	},
	module:{
		rules:[
		 {
			test: /\.js$/,
			include: /src/,
			exclude: /node_modules/,
			use:{
				loader:'babel-loader',
				options:{
					presets: ['env']
				}
			}
		 },

		 { 
		 	test: /\.html$/,
		 	use: ['html-loader']
		 },

		 {
		 	  test: /\.scss$/,
  			  include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
  			  use: extractPlugin.extract({
    		    use: [
    		    {
    		    	loader: 'css-loader', 
    		    	options: {
    		    		sourceMap: true
    		    	}
    		    },

    		    {
    		   		loader: 'sass-loader',
    		   		options: {
    		   			sourceMap: true
    		   		}
    		    }
    		    ],    		   
    			fallback: 'style-loader'
  			  })	
		 }	 	
		]
	},

	devtool: 'inline-source-map',

	plugins : [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		extractPlugin //broken for >= webpack 4.0
	]
}