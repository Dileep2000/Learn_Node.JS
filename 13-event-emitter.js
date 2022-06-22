// Events
//  - Event-Driven Programming
//  - Used heavily in node.js
const EventEmitter = require('events')
const customEmmiter = new EventEmitter()
// on -listen for an event
// emit - emit an event
customEmmiter.on('response', ()=>{
    console.log('data received')
})
customEmmiter.on('response', ()=>{
    console.log('some more data received')
})
customEmmiter.emit('response')