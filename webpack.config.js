const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'plugin.js',
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
        }],
    },
};
