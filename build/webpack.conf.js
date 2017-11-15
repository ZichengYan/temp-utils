const webpack = require('webpack')
const package = require('../package.json')
const {resolve} = require('./utils.js')
module.exports = {
    entry: resolve('./src/index.js'), // 入口
    output: {
        path: resolve('./dist'),
        filename: `${package.name}.js`, // 输出的文件名
        library: package.name,
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [resolve('src')],
                loader: 'babel-loader',  // -loader可以省略
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}
