const webpack = require('webpack')
const fileName = require('../package.json')
const {resolve} = require('./utils.js')
console.log('ase',resolve('../src/index.js'));
module.exports = {
    entry: resolve('./src/index.js'), // 入口
    output: {
        path: resolve('../dist'), // 输出目录
        filename: `${fileName.name}.js`, // 输出的文件名
        // library: fileName.name,
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 禁止webpack去这个目录中查找
                include: [resolve('src')],
                loader: 'babel-loader',  // -loader可以省略
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}
