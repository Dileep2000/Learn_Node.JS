// simply install node.js LTS version
// node --version gives the version of the node.js 
// node file.js to run a js file
// const amount = 9

// if (amount < 10) {
//     console.log('samll number')
// } else {
//     console.log('largr number')
// }

// console.log("Hello world this is my first node js code. I am excited to learn node.js")


// GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (Common.js)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__dirname)
// console.log(__filename)
// console.log(module)
// console.log(process)
// setInterval(() => {
//     console.log("Hello World")
// }, 1000);
// Same setTimeout

// Modules
// CommonJS every file is module(by default)
// Modules - Encapsulated Code (only share minimum)

// const secret = "Super secret"
// const dileep = "Dileep"

// const sayHi = (name) => (
//     console.log(`Hello there ${name}`)
// )
// const names = require('./4-modules-demo')
// const sayHi = require('./5-utils')
// console.log(names)
// console.log(sayHi)
// sayHi.sayHi("Sushanth")
// sayHi.sayHi(names.dileep)
// sayHi.sayHi(names.lokesh)

// Structure of module matters
// module.exports.persons = {
//     name: "sushanth"
// }
// module.exports.items = ['item1','item2']
// console.log(module)
// const alter = require('./6-modules-alternative')
// console.log(alter)

// const num1 = 5
// const num2 = 10

// function addValues () {
//     console.log(`The sum is : ${num1 + num2}`)
// }

// addValues()

// require('./7-advance-modules')
// // when you import a module you actually invoke it. It runs the module.


// Built in modules
// OS
// Path
// FS
//  HTTP

// const os = require('os')
// Info about current user
// const user = os.userInfo()
// console.log(user)
// console.log(os.uptime())
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }
// console.log(currentOS)

// Path module

// const path = require('path')
// console.log(path.sep)
// console.log(path.join('/src/','component','test.txt'))

// const base = path.basename(path.join('/src/','component','test.txt'))
// console.log(base)

// console.log(path.resolve(__dirname,'src','component','test.txt'))

// File system
// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./src/component/static/first.txt','utf8')
// const second = readFileSync('./src/component/static/second.txt','utf8')
// console.log(first)
// console.log(second)

// writeFileSync('./src/component/static/third.txt',"Hello world this is the file result in creating using writFileSync",{flag:'a'})

// const {readFile, writeFile} = require('fs')

// readFile('./src/component/static/first.txt', 'utf8' , (err,result)=> {
//     if(err) {
//         console.log(err)
//         return
//     } else {
//         console.log(result)
//     }
// })

// writeFile('./src/component/static/fourth.txt',"This is a fourth file",(err,result) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(result)
//     }
// })

// HTTP
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if(req.url === '/') {
//         res.write("Welcome to our home page")
//         res.end()
//     }
//     if(req.url === '/about') {
//         res.write("Welcome to our ablot page")
//         res.end()
//     }
//     // res.end(`
//     // <h1>Opps!</h1>
//     // <p>We can't seem to find the page you are looking fot</p>
//     // <a herf="/"><Back to Home/a>
//     // `)
// })
// server.listen(5000)

// NPM mode package manager
// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particualr peoject
// npm i <packagename>

// global dependency - use it in amy project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
//  npm inti -y (everything default)

// const _ = require('lodash')
// const items = [1,[2,3,[4]]]
// console.log(_.flattenDeep(items))

// Important topics
// Event loop, ASYNC Pattrens, Event Emitters and Streams
// Main concepts
// Pre-built code

// Event Loops
// Exapmle 1
// const {readFile} = require('fs')
// console.log("Started a first task")
// readFile('./src/component/static/first.txt','utf8',(err,res)=>{
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(res)
//     console.log("Completed first task")
// })
// console.log("Starting next task")

// Example 2
// started os process
// console.log("First")
// setTimeout(()=>{
//     console.log("second"), 0
// })
// console.log("third")
// completed and exited os process

// Example 3
// setInterval(()=>{
//     console.log("Hello World")
// },2000)
// console.log('I will run first')
// Process stays alive unles you kill the process ctrl+c or any unexpedcted error

// Exapmle 4
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     console.log('request event')
//     res.end("hello world")
// })
// server.listen(5000, ()=> {
//     console.log('server listening on port: 5000...')
// })

// Async pattrens
// const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// readFile('./src/component/static/first.txt','utf8',(err,data)=>{
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })
// Turning this into promise will fix the blocking problem
// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile('./src/component/static/first.txt','utf8',(err,data)=>{
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
// const readFilePromice = util.promisify(readFile)
// const writreFilePromice = util.promisify(writeFile)

// getText('./src/component/static/first.txt').then(result=> console.log(result)).catch(err => {
//     console.log(err)
// })

// const start = async() => {
//     try {
//         const first = await readFile('./src/component/static/first.txt','utf8')
//         const second = await readFile('./src/component/static/second.txt','utf8')
//         console.log(first)
//     } catch (error) {
//         console.log(error)
//     }
// }
// start()

// Events
//  - Event-Driven Programming
//  - Used heavily in node.js
// const EventEmitter = require('events')
// const customEmmiter = new EventEmitter()
// on -listen for an event
// emit - emit an event
// customEmmiter.on('response', ()=>{
//     console.log('data received')
// })
// customEmmiter.on('response', ()=>{
//     console.log('some more data received')
// })
// customEmmiter.emit('response')

// request event
// const http = require('http')
// const server = http.createServer()
// server.on('request',(req,res)=>{
//     res.end('welcome')
// })
// server.listen(5000)

// Streams - Read or write sequentially
// Writable used to write data sequentially
// Readable used to read data sequentially
// Duplex used for both read and write sequentially
// Transform data can be modified when reading or writing data sequentially
// Streams extend event emitters
// Good example is reading a file
// const {createReadStream} = require('fs')

// const stream = createReadStream('./src/component/static/large.txt',{highWaterMark: 900000,encoding: 'utf8'})
// stream.on('data',(result)=>{
//     console.log(result)
// })
// stream.on('error',(err)=>{
//     console.log(err)
// })

// Http Stream

// const http = require('http')
// const fs = require('fs')
// const { fill, result } = require('lodash')

// http.createServer((req,res)=>{
//     const fileStream = fs.createReadStream('./src/component/static/large.txt',{encoding:'utf-8'});
//     fileStream.on('open',(result)=>{
//         fileStream.pipe(result)
//     })
//     fileStream.on('error',(err)=>{
//         res.end(err)
//     })
// })