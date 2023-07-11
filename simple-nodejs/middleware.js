const process = require('process');

exports.log = function log(req,res,next){
    // console.log(req.headers)
    next()
}


exports.processId = function processId(req,res,next){
    console.log(process.pid)
    next()
}