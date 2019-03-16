var path = require('path');

module.exports = {
	// mode: 'production',
	entry: "./app/assets/scripts/app.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"		
		},
		module: {
			rules : [
				{
				test: /\.jsx$/,
				exclude: [
					path.resolve(__dirname, 'node_modules',)
				],
				loader: 'babel-loader',
				options: {
					presets: ['es2015'],
				}
				}				
			]
		}  
};