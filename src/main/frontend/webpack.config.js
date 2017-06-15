var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: '../../../target/classes/static/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "./src")
                ],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },
            { 
              test: /\.jpg$/, 
              loader: "file-loader" 
            },
            {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'file'
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
   
};
