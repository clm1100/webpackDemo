const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = merge(common,{
    mode:'production',
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
          }),
    ],
    devtool:"source-map",
    optimization: {
        runtimeChunk: {
          name: "runtime",
        }
      },
})