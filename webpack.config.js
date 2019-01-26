/**
 * Author: Alexander <Horat1us> Letnikow
 * Support: reclamme@gmail.com
 *
 * This file is Dark and full of Terrors
 */

const
    path = require('path'),
    webpack = require('webpack');

const debug = process.env.NODE_ENV !== 'production';
const env = debug ? 'local' : 'production';

const
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    CircularDependencyPlugin = require('circular-dependency-plugin'),
    nodeExternals = require("webpack-node-externals");

console.log("Building in " + env + " environment. Debug: " + debug.toString());

const config = {
    entry: {
        index: "./src/index.ts",
    },

    target: "node",
    externals: [nodeExternals()],

    output: {
        filename: 'index.js',
        path: path.resolve('./build'),
        publicPath: "/",
        library: "react-img-webp",
        libraryTarget: "umd",
    },

    devtool: debug ? "source-map" : false,

    resolve: {
        extensions: [".ts", ".js", ".json", ".jsx", ".tsx",],
        modules: [
            path.resolve('node_modules'),
            path.resolve('src'),
        ],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env',],
                        },
                    },
                    "awesome-typescript-loader",
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env',],
                    },
                },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                use: "source-map-loader"
            }
        ]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin(path.resolve('./build')),
        new webpack.optimize.ModuleConcatenationPlugin(),
        // new CircularDependencyPlugin({
        //     // exclude detection of files based on a RegExp
        //     exclude: /node_modules/,
        //     // add errors to webpack instead of warnings
        //     failOnError: true,
        //     // override `exclude` and `failOnError` behavior
        //     // `onDetected` is called for each module that is cyclical
        //     onDetected({paths, compilation}) {
        //         // `paths` will be an Array of the relative module paths that make up the cycle
        //         compilation.errors.push(new Error(paths.join(' -> ')))
        //     }
        // })
    ]
};

module.exports = config;
