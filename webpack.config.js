var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, './'),
    entry: {
        js: './index.js'
    },
    output: {
        path: path.join(__dirname, './'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') }
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    devServer: {
        contentBase: './'
    }
}
