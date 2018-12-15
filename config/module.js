const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dev = process.env.NODE_ENV;
console.log(dev);
module.exports = {
    rules:[
        {
            test:/\.scss$/,
            use: [
                dev=="development"?'style-loader':MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                'postcss-loader'
              ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use:[
                {
                    loader:'file-loader',
                    options:{
                        name: 'img/[hash:5].[ext]'
                    }
                }
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use:[
                'file-loader'
            ]
        },
        {
            test: /\.(htm|html)$/i,
            use:[
                {loader: 'html-withimg-loader'}
            ]
        }
    ]
}