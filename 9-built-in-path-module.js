// Path module

const path = require('path')
console.log(path.sep)
console.log(path.join('/src/','component','test.txt'))

const base = path.basename(path.join('/src/','component','test.txt'))
console.log(base)

console.log(path.resolve(__dirname,'src','component','test.txt'))