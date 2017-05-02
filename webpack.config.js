import path from 'path';
import webpack from 'webpack';

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./client/index.js'
	],
	// output: {
	// 	filename: 'bundle.js',
	// 	publicPath: '/client'
 //  	},

  	output: {
         path: '/',
         filename: 'bundle.js'
	},
  	plugins: [
  		new webpack.NoEmitOnErrorsPlugin(),
  		new webpack.optimize.OccurrenceOrderPlugin(),
  		new webpack.HotModuleReplacementPlugin()
  	],
	module: {
		loaders: [{
			test: /\.js$/,
			include: path.join(__dirname, 'client/'),
			loaders: ['react-hot-loader', 'babel-loader?plugins[]=transform-decorators-legacy']
		}]
  	},
  	resolve: {
  		extensions: [".js"]
  	}
}