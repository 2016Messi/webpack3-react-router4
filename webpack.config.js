const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const react = require('react');

module.exports = {
    entry: {
        bundle :__dirname + "/src/js/root.js",               //已多次提及的唯一入口文件
        // vendor: ['react','react-dom','react-router-dom','react-responsive']
    },
    output: {
        path: path.resolve(__dirname, "src/js"),     //打包后的文件存放的地方
        filename: "[name].js",
    },
    // devtool: 'eval-source-map',
    devtool: 'false',
    devServer: {
        contentBase: path.resolve(__dirname, "./"),//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true //实时刷新
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
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./src/js/bundle-manifest.json')
        }),
        new UglifyJSPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};