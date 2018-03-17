 
 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');

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
		commentBase: path.resolve(__dirname, 'dist/assets/media'),
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
		  } 
		]
	}
	devtool: 'inline-source-map',
	plugins : [
		new CleanWebpackPlugin(['dist'])
	]
}