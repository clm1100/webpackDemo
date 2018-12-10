const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common,{
    mode:'development',
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        hot: true
    }
})