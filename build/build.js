var ora = require('ora')
var rm = require('rimraf')
var chalk = require('chalk')
var webpack = require('webpack')
var {build: {output}} = require('./config.js')
var webpackConfig = require('./webpack.conf.js')
const {resolve} = require('./utils.js')

var spinner = ora('building for production...')
spinner.start()

rm(resolve(output), err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }
        console.log(chalk.yellowBright('Build complete.\n'))
    })
})
