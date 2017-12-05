const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + "/src/js/root.js",               //已多次提及的唯一入口文件
    output: {
        path: path.resolve(__dirname, "src/js"),     //打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "./"),//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react"]
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    }
};