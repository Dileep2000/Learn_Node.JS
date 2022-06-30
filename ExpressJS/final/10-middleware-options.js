// Middleware are functions that executes during the request to the server. Each middleware functions has access to req and res objedct.
const express = require('express')
const app = express()

// req => middleware => res

// 1. use vs route
// 2. options - our own, express / third party

// const logger = (req,res,next) => {
//     const method = req.method
//     const url = req.url
//     const time = new Date().getFullYear()
//     console.log(method,url,time)
//     // res.send("Testing")
//     next()
// }
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
// app.use(logger)
// app.use('/api',logger)
// app.use(authorize)
// app.use([logger,authorize])
app.use(morgan('tiny'))
// app.use(express.static('./navbar-app'))
app.get('/',logger,(req,res)=> {
    // const method = req.method
    // const url = req.url
    // const time = new Date().getFullYear()
    // console.log(method,url,time)
    res.send("Home page")
})

app.get('/about',(req,res)=> {
    res.send("About page")
})

app.get('/api/products',(req,res)=> {
    res.send("Products page")
})

app.get('/api/items',(req,res)=> {
    res.send("Items page")
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000....')
})
