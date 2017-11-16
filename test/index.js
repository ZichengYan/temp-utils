const path = require('path');

console.log('indexindexindex',path.resolve(__dirname, './test'));
// require all test files (files that ends with .spec.js)
const testsContext = require.context(path.resolve(__dirname,'./test'), true, /\.test.js$/)
console.log('testsContexttestsContext', testsContext)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('./src', true, /^\.\/(?!index(\.js)?$)/)
// const srcContext = require.context('../../src', true, /\.js$/)

srcContext.keys().forEach(srcContext)
