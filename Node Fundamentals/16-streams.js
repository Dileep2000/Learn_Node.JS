// Streams - Read or write sequentially
// Writable used to write data sequentially
// Readable used to read data sequentially
// Duplex used for both read and write sequentially
// Transform data can be modified when reading or writing data sequentially
// Streams extend event emitters
// Good example is reading a file
const {createReadStream} = require('fs')

const stream = createReadStream('./src/component/static/large.txt',{highWaterMark: 900000,encoding: 'utf8'})
stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})