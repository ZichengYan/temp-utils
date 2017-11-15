const webpack = require('webpack')
const fileName = require('../package.json')
const {resolve} = require('./utils.js')
module.exports = {
    entry: resolve('./src/index.js'), // 入口
    output: {
        path: resolve('./dist'),
        filename: `${fileName.name}.js`, // 输出的文件名
        library: fileName.name,
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
        // new webpack.optimize.UglifyJsPlugin()
    ]
}
