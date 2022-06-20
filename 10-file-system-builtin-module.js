// File system
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./src/component/static/first.txt','utf8')
const second = readFileSync('./src/component/static/second.txt','utf8')
console.log(first)
console.log(second)

writeFileSync('./src/component/static/third.txt',"Hello world this is the file result in creating using writFileSync",{flag:'a'})