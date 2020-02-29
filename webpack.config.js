/* eslint-env node */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const chalk = require('chalk');
const metadata = require('./package.json');

const TS_COMPILER_OUTPUT_DIRECTORY = '../src/ts-compiled';
const BUNDLE_OUTPUT_DIRECTORY_NAME = 'build';
const BUNDLE_OUTPUT_DIRECTORY = `../${BUNDLE_OUTPUT_DIRECTORY_NAME}`;
const BUNDLE_FILE_NAME = 'digest-code-client.bundle.js';

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, BUNDLE_OUTPUT_DIRECTORY),
        filename: BUNDLE_FILE_NAME,
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: [/node_modules/, /intermediate/, /build/],
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/api': 'http://localhost:8080',
        },
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                TS_COMPILER_OUTPUT_DIRECTORY,
                BUNDLE_OUTPUT_DIRECTORY_NAME,
            ],
        }),
        new ProgressBarPlugin({
            format: `client build ${chalk.yellow(
                `v${metadata.version}`,
            )} [${chalk.magenta(':bar')}] ${chalk.green.bold(
                ':percent',
            )} (${chalk.gray(':elapseds')})`,
            clear: false,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
        new webpack.DefinePlugin({
            PUBLIC_URL: '/public',
        }),
        new webpack.ProvidePlugin({}),
        // TO BE EDITED
        new ManifestPlugin({
            fileName: 'manifest.json',
            publicPath: '/public/',
        }),
    ],
};
