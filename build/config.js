const {resolve}=require('./utils.js')
console.log('cinfig',resolve('../dist'))
module.exports={
    build:{
        output:resolve('../dist')
    }
}