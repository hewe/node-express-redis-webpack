var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {
    name: 'server',
    target: 'node',
    externals:[nodeExternals()],
    devtool: isProd ? 'cheap-module-source-map' : 'eval-source-map',
    entry: './src/app.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    output: {
        path: 'dist/',
        filename: 'dist.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false
            },
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(nodeEnv)
            },
        })
    ]
};
