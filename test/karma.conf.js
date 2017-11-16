// Karma configuration
// Generated on Wed Nov 15 2017 15:31:34 GMT+0800 (CST)
const {resolve} = require('../build/utils.js');
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],


        // list of files / patterns to load in the browser
        files: [
            // {pattern: './src/**/*.js', watched: true, included: false},
            // {pattern: './test/**/*.js', watched: true, included: true},
            './test/index.js'
        ],


        // list of files to exclude
        exclude: ['./test/karma.conf.js', './test/index.js', './test/z_temp.js'],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "test/**/*.test.js": ['webpack', 'coverage'],
            // "src/**/*.js": ['webpack'],
        },
        webpack: {
            module: {
                loaders: [{
                    test: /test\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    include: [resolve('./test/')],
                    query: {
                        presets: ['es2015'],
                        plugins: ['istanbul']
                    }
                }]
            }
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        coverageReporter: {
            dir: './coverage1',
            reporters: [
                {type: 'lcov', subdir: '.'},
                {type: 'text-summary'}
            ]
        },
        reporters: ['coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
