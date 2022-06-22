// Http Stream

const http = require('http')
const fs = require('fs')
const { fill, result } = require('lodash')

http.createServer((req,res)=>{
    const fileStream = fs.createReadStream('./src/component/static/large.txt',{encoding:'utf-8'});
    fileStream.on('open',(result)=>{
        fileStream.pipe(result)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})