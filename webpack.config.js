const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const BUNDLE_OUTPUT_DIRECTORY = 'build';
const BUNDLE_FILE_NAME = 'digest-code.bundle.js'

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, BUNDLE_OUTPUT_DIRECTORY),
        filename: BUNDLE_FILE_NAME
    },
    module: {
        rules: [{
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/api': 'http://localhost:8080'
        }
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [BUNDLE_OUTPUT_DIRECTORY]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            PUBLIC_URL: '/public'
        }),
        new webpack.ProvidePlugin({
            internals: 'internals'
        }),
        // TO BE EDITED
        new ManifestPlugin({
            fileName: 'manifest.json',
            publicPath: '/public/'
        }),
    ]
}