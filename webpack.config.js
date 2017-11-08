const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

module.exports = {
  entry: {
    app: path.join(paths.JS, '/index.js')
  },

  devtool: 'inline-source-map',

  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('bundle.css')
  ],

  module: {
    rules: [
      // Transpile .js and .jsx files with Babel
      // Babel configuration is located in ./babelrc
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [ 
          'babel-loader'
        ]
      },

      // Bundle CSS files
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will bundle them into a single file whose name we defined above under plugins section
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },

      // File Loader handles loading image assets
      // Other file types can be included as needed
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }
    ]
  }

};
