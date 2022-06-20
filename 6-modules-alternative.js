
// Modules
// CommonJS every file is module(by default)
// Modules - Encapsulated Code (only share minimum)

// const secret = "Super secret"
// const dileep = "Dileep"

// const sayHi = (name) => (
//     console.log(`Hello there ${name}`)
// )
const names = require('./4-modules-demo')
const sayHi = require('./5-utils')

// console.log(names)
// console.log(sayHi)

sayHi.sayHi("Sushanth")
sayHi.sayHi(names.dileep)
sayHi.sayHi(names.lokesh)

// Structure of module matters

module.exports.persons = {
    name: "sushanth"
}

module.exports.items = ['item1','item2']
console.log(module)

// const alter = require('./6-modules-alternative')
// console.log(alter)