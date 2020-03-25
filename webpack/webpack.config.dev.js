'use strict'; // cannot use undeclared variables
const path = require('path');
const webpack = require('webpack');

/*
 * process.cwd() is used to determine the correct base directory.
 * Reference: https://nodejs.org/api/process.html#process_process_cwd
 */
const CURRENT_WORKING_DIR = process.cwd();

const config = {
    context: path.resolve(CURRENT_WORKING_DIR, 'client'),
    entry: {
        app: [
            'webpack-hot-middleware/client', //bundle for hot reloading purpose
            './main.js' //entry point of project
        ]
    },
    mode: 'development',
    module: {
        rules: [
            { //To transform all ES6 and JSX syntax
                test: /\.(js|jsx)$/, //checking all JS files
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    cacheDirectory: true,
                    // babel-loader enables cahing results
                    // in ./node_modules/.cache/babel-loader/
                    // for faster rebuilds
                    plugins: [
                        'react-hot-loader/babel',
                        '@babel/plugin-proposal-function-bind',
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=[name].[ext]&outputPath=images',
                options: {}
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    output: {
        path: path.resolve(CURRENT_WORKING_DIR, 'dist'),
        filename: 'client.bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR
        new webpack.NoEmitOnErrorsPlugin() // skip emitting phase when there're errors while compiling
    ],
};

module.exports = config;
