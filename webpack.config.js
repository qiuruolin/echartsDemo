const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[hash].js"
    },
    resolve: {
        extensions: ['.js', '.css', '.json']
    },
    devServer: {
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        // 使css不模块化
                        // options: {
                        //     modules: true
                        // }
                    }]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'template/index.html')
        }),
        new CleanWebpackPlugin(
            ['build/main.*.js'], {
                root: __dirname, // 根目录
                verbose: true, // 开启在控制台输出信息
                dry: false // 启用删除文件
            }
        ),
        new ExtractTextPlugin("./css/[name].[chunkhash].css"),
        new webpack.ProvidePlugin({ //全局引入echarts
            echarts: 'echarts',
            echartsGL: 'echarts-gl'
        })
    ]
}