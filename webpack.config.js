 
 const path = require('path');

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
	devtool: 'inline-source-map'
}