const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== "production";
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM'
}

module.exports = {
	mode: process.env.NODE_ENV,
	entry: './resources/js/laraberg.jsx',
	output: {
		filename: 'laraberg.js',
		path: path.resolve(__dirname, 'public/js'),
		clean: true,
	},
  	
  
  	devtool: 'source-map',
  	externals: externals,
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	}, 
  	//resolve: {
    //	extensions: [".jsx", ".js", ".scss", ".css"],
	//},

  	module: {
    	rules: [
      	
		{
            test: /\.(png|jpg|jpeg|gif|ico|woff|woff2|ttf|svg|eot|otf)$/,
            use: {
                loader: 'file-loader',
                options: { 
                    name: '[name].[ext]',
                    outputPath: '../fonts/'
                }
            }
        },


      	{
        	test: /\.(s*)css$/,
        	use: [
          		MiniCssExtractPlugin.loader,

          		// Creates `style` nodes from JS strings
          		"style-loader",
          		// Translates CSS into CommonJS
          		"css-loader",
          		// Compiles Sass to CSS
          		"sass-loader",
        	],
      	},

		  {
        	test: /\.(js|jsx)$/,
        	exclude: /node_modules/,
        	use: {
          		loader: 'babel-loader'
        	}
      	},
      
     	/* {
        	test: /\.(s*)css$/,
        	use: [
          		//{
          			//  loader: MiniCssExtractPlugin.loader
          		//},
          		'css-loader',
				'postcss-loader',
				'sass-loader'
			]
		}*/
	]},
  	plugins: [
    	new MiniCssExtractPlugin({
      		// Options similar to the same options in webpackOptions.output
      		// both options are optional
      		//filename: "[name].css",
			filename: '../css/[name].css',
    	}),
  	]
}
