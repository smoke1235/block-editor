const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM'
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './resources/js/laraberg.jsx',
  output: {
    //filename: 'laraberg.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  
  devtool: 'source-map',
  externals: externals,
  resolve: {
    extensions: [".jsx", ".js"],
},
optimization: {
  splitChunks: {
    chunks: 'all',
  },
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '../css/laraberg.css' })
  ]
}
