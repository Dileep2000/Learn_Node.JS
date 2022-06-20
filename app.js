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
