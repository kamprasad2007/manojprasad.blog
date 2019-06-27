const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',

    entry: {
        index : './src/index.js'
    },

    externals: [nodeExternals()], 

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new CopyPlugin([
            { from: './src/server.js', to: './server.js' },
            { from: './src/posts', to: './posts' },
            { from: './src/draft', to: './draft' },
            { from: './src/error', to: './error' },
            { from: './src/posts', to: './posts' }
        ]),
    ]
};