// console.log("Express Tutorial")
// const { readFileSync } = require('fs')
// const http = require('http')
// const homePage = readFileSync('./index.html')
// const navapp = readFileSync('./navbar-app/index.html')
// const navstyles = readFileSync('./navbar-app/index.css')
// const navjs = readFileSync('./navbar-app/index.js')
// const navlogo = readFileSync('./navbar-app/logo.svg')
// const server = http.createServer((req,res)=> {
//     // console.log('user hit the server');
//     // console.log(req.method)
//     // console.log(req.url)
//     if(req.url === '/') {
//         res.writeHead(200,{'content-type':'text/html'})
//         // 'content-type' : 'text/html'
//         res.write(homePage)
//         res.end()
//     } else if(req.url === '/about') {
//         res.writeHead(200,{'content-type':'text/html'})
//         // 'content-type' : 'text/html'
//         res.write("<h1>About page</h1>")
//         res.end()
//     } else if(req.url === '/nav-app') {
//         res.writeHead(200,{'content-type':'text/html'})
//         // 'content-type' : 'text/html'
//         res.write(navapp)
//         res.end()
//     } else if(req.url === '/index.css') {
//         res.writeHead(200,{'content-type':'text/css'})
//         // 'content-type' : 'text/html'
//         res.write(navstyles)
//         res.end()
//     } else if(req.url === '/index.js') {
//         res.writeHead(200,{'content-type':'text/javascript'})
//         // 'content-type' : 'text/html'
//         res.write(navjs)
//         res.end()
//     } else if(req.url === '/logo.svg') {
//         res.writeHead(200,{'content-type':'image/svg+xml'})
//         // 'content-type' : 'text/html'
//         res.write(navlogo)
//         res.end()
//     } else {
//         res.writeHead(404,{'content-type':'text/html'})
//         // 'content-type' : 'text/html'
//         res.write("<h1>Page Not Found</h1>")
//         res.end()
//     }
// })
// server.listen(5000)

// Express basics
// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.status(200).send("Home page")
// })
// app.get('/about',(req,res)=>{
//     res.status(200).send('About page')
// })
// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>Resource not found</h1>')
// })
// const path = require('path')
// app.use(express.static('./navbar-app'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

//  adding to static assets
//  SSR server side rendering

// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>Resource not found</h1>')
// })

// app.listen(5000,()=> {
//     console.log("Server is listening on port 5000...")
// })
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// API              VS                  SSR
// JSON                                Template
// Send Data                           Send Template
// Res.JSON()                          Res.RENDER()
// const {products} = require('./data')
// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.json(products)
// })

// app.listen(5000,()=>{
//     console.log("Server is listening on port 5000....")
// })

// Params
// const {products} = require('./data')
// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
// })

// app.get('/api/products',(req,res)=>{
//     const newProduct = products.map((product)=>{
//         const {id,name,image} = product;
//         return {id,name,image}
//     })
//     res.json(newProduct)
// })

// app.get('/api/products/1',(req,res)=>{
//     const singleProduct = products.find((product)=> product.id === 1)
//     res.json(singleProduct)
// })

// Route Parameters
// app.get('/api/products/:id',(req,res)=>{
//     const singleProduct = products.find((product)=> product.id === Number(req.params.id))
//     if(singleProduct === undefined) {
//         res.status(404).send('<h1>No Product Found</h1>')
//     } else {
//         res.json(singleProduct)
//     }
// })
// app.get('/api/products/:id/reviews/:reviewID',(req,res)=>{
//     console.log(req.params)
//     res.send("Hello")
// })
// Query Strig parameters

// app.get('/api/product/query',(req,res)=>{
//     // console.log(req.query)
//     let sorteProducts = [...products]
//     const {search,limit} = req.query
    // res.send("Hello World")
//     if(search) {
//         sorteProducts = sorteProducts.filter((product)=>{
//             return product.name.startsWith(search)
//         })
//     }
//     if(limit) {
//         sorteProducts = sorteProducts.slice(0,Number(limit))
//     }
//     if(sorteProducts.length < 1) {
//         return res.status(200).send('No products matched your search')
//     }
//     return res.status(200).json(sorteProducts)
// })

// app.listen(5000,()=>{
//     console.log("Server is listening on port 5000....")
// })

// Middleware are functions that executes during the request to the server. Each middleware functions has access to req and res objedct.
// const express = require('express')
// const app = express()

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
// const logger = require('./logger')
// const authorize = require('./authorize')
// const morgan = require('morgan')
// app.use(logger)
// app.use('/api',logger)
// app.use(authorize)
// app.use([logger,authorize])
// app.use(morgan('tiny'))
// app.use(express.static('./navbar-app'))
// app.get('/',logger,(req,res)=> {
    // const method = req.method
    // const url = req.url
    // const time = new Date().getFullYear()
    // console.log(method,url,time)
//     res.send("Home page")
// })

// app.get('/about',(req,res)=> {
//     res.send("About page")
// })

// app.get('/api/products',(req,res)=> {
//     res.send("Products page")
// })

// app.get('/api/items',(req,res)=> {
//     res.send("Items page")
// })

// app.listen(5000,()=>{
//     console.log('server is listening on port 5000....')
// })

//  Methods
//  GET
// const express = require('express')
// const app = express()

// let {people} = require('./data')
// GET
// app.get('/api/people',(req,res)=>{
//     res.status(200).json({success:true,data: people})
// })
// Post
// app.use(express.static('./public'))
// app.use(express.urlencoded({extended:false}))
// app.post('/login',(req,res)=>{
//     let {name} = req.body
//     if(name) {
//         return res.status(200).send(`Welcome ${name}`)
//     }
//     res.status(401).send("Please provide credentials")
// })
// app.use(express.json())
// app.post('/api/people',(req,res)=>{
//     let {name} = req.body
//     if(name) {
//         people.push({id:people.length+1,"name":name})
//         return res.status(200).json({success:true,person:name})
//     }
//     res.status(401).json({success:false,msg: "Please provide name value"})
// })
// PUT
// app.put('/api/people/:id', (req, res) => {
// const { id } = req.params
// const { name } = req.body

// const person = people.find((person) => person.id === Number(id))

// if (!person) {
//     return res
//     .status(404)
//     .json({ success: false, msg: `no person with id ${id}` })
// }
// const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//     person.name = name
//     }
//     return person
// })
// res.status(200).json({ success: true, data: newPeople })
// })
// DELETE
// app.delete('/api/people/:id', (req, res) => {
// const person = people.find((person) => person.id === Number(req.params.id))
// if (!person) {
//     return res
//     .status(404)
//     .json({ success: false, msg: `no person with id ${req.params.id}` })
// }
// const newPeople = people.filter(
//     (person) => person.id !== Number(req.params.id)
// )
// return res.status(200).json({ success: true, data: newPeople })
// })

// app.listen(5000,()=>{
//     console.log('Server is listening on port 5000...')
// })

// Router(Express Router)
// const express = require('express')
// const app = express()
// const people = require('./routes/people')
// const login = require('./routes/auth')

// app.use(express.static('./public'))
// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
// app.use('/api/people', people)
// app.use('/login', login)

// app.listen(5000,()=>{
//     console.log('Server is listening on port 5000...')
// })

// Router Controller
// const express = require('express')
// const app = express()
// const people = require('./final/15-controller')

// app.use(express.static('./public'))
// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
// app.use('/api/people', people)

// app.listen(5000,()=>{
//     console.log('Server is listening on port 5000...')
// })