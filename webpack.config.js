var path = require('path');
var webpack = require('webpack');

module.exports = [{
    context: __dirname + '/frontEnd',
    entry: './app.jsx',
    output: {
        path: __dirname + '/public/build',
        publicPath:'/public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/,/test/],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.es6?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/,/__tests__/],
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    resolve:{
        root: path.resolve(__dirname),
        modulesDirectories:['node_modules'],
        extensions:['','.js', '.jsx', '.es6'],
        alias: {
            rootDir: path.resolve(__dirname),
            singin:path.resolve(__dirname, 'forntEnd/components/singin/index.jsx')
        },
    },
    resolveLoaders:{
        modulesDirectories:['node_modules'],
        //moduleTemplates:['*-loader'],
        extensions:['','.js']
    },
    devServer:{
        contentBase: __dirname + '/public/',
        hot: true,
        historyApiFallback: false,
    }
}];