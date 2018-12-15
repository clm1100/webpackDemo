const path = require('path');
const configModule = require('./config/module.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:{
        index:'./src/js/index.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        // filename:'[hash:6].js',
        filename: '[name].[hash].js',
    },
    module:configModule,
    plugins:[
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title:"哈哈哈啊",
            template:'./src/index.html'
        })
    ]
}