const webpack = require('webpack');
const path = require('path');

const paths = {
    OUTPUT: path.resolve(__dirname, 'dist'),
    ENTRY: path.resolve(__dirname, 'src/js/index.js')
};

module.exports = {
    entry: {
        app: paths.ENTRY // points to app's entry point which is ./src/js/index.js
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: paths.OUTPUT
    },

    output: {
        path: paths.OUTPUT,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            // Transpile .js and .jsx files with Babel
            // Babel configuration is located in ./babelrc
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },

            // Since webpack only understands JavaScript we have to use separate utilities called "loaders"
            // to get our CSS into index.html.
            // Step 1: Tell index.js about our CSS dependencies by importing the css files like this:
            //  import './../css/style.css';
            // Step 2: Use loaders to process .css, .scss files (*note* loaders listed in the 'use' array
            //  run in reverse order)
            {
                test: /\.css$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader' // translates CSS into CommonJS
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },

            // File Loader handles loading image assets
            // Other file types can be included as needed
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },

            {
                test: /\.svg$/,
                use: ['svg-inline-loader']
            }
        ]
    }

};
