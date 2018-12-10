const path = require('path');
const configModule = require('./config/module.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
module.exports = {
    mode:"development",
    entry:"./index.js",
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[hash:6].js',
        publicPath: '/'
    },
    module:configModule,
    plugins:[
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title:"哈哈哈啊",
            template:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
          }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    // devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        hot: true
    }
    // optimization: {
    //     runtimeChunk: {
    //       name: "manifest",
    //     } 
    //   },
}