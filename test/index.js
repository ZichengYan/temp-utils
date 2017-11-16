// require all test files (files that ends with .spec.js)
const testsContext = require.context('./spec', true, /\.js$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('../src', true, /^\.\/(?!index(\.js)?$)/)
const srcContext = require.context('../src', true, /^((?!(index|z_temp)).)*$/)
// const srcContext = require.context('../../src', true, /\.js$/)

srcContext.keys().forEach(srcContext)

