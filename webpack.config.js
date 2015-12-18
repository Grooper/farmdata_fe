// Configuration Settings for Webpack
var webpack = require('webpack');
var path = require('path');

// Get the NODE_ENV
var NODE_ENV = process.env.ENV || 'development';

// Exports
module.exports = {
	entry: './entry.jsx',

	output: {
		path: __dirname,
		filename: 'bundle.js'
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
	},

	resolve: {
		alias: {
			components: __dirname + '/src/scripts/components',
			models: __dirname + '/src/scripts/backbone/models',
			collections: __dirname + '/src/scripts/backbone/collections'
		}
	},

	module: {
		loaders: [
			{ 
			    test: /\.jsx$/, 
			    exclude: /node_modules/, 
			    loader: 'babel', 
			    query:
			      {
			        presets:['es2015', 'react']
			      }
			}
		]
	}
};
