console.log("Express Tutorial")
const { readFileSync } = require('fs')
const http = require('http')
const homePage = readFileSync('./index.html')
const navapp = readFileSync('./navbar-app/index.html')
const navstyles = readFileSync('./navbar-app/index.css')
const navjs = readFileSync('./navbar-app/index.js')
const navlogo = readFileSync('./navbar-app/logo.svg')
const server = http.createServer((req,res)=> {
    // console.log('user hit the server');
    // console.log(req.method)
    // console.log(req.url)
    if(req.url === '/') {
        res.writeHead(200,{'content-type':'text/html'})
        // 'content-type' : 'text/html'
        res.write(homePage)
        res.end()
    } else if(req.url === '/about') {
        res.writeHead(200,{'content-type':'text/html'})
        // 'content-type' : 'text/html'
        res.write("<h1>About page</h1>")
        res.end()
    } else if(req.url === '/nav-app') {
        res.writeHead(200,{'content-type':'text/html'})
        // 'content-type' : 'text/html'
        res.write(navapp)
        res.end()
    } else if(req.url === '/index.css') {
        res.writeHead(200,{'content-type':'text/css'})
        // 'content-type' : 'text/html'
        res.write(navstyles)
        res.end()
    } else if(req.url === '/index.js') {
        res.writeHead(200,{'content-type':'text/javascript'})
        // 'content-type' : 'text/html'
        res.write(navjs)
        res.end()
    } else if(req.url === '/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'})
        // 'content-type' : 'text/html'
        res.write(navlogo)
        res.end()
    } else {
        res.writeHead(404,{'content-type':'text/html'})
        // 'content-type' : 'text/html'
        res.write("<h1>Page Not Found</h1>")
        res.end()
    }
})
server.listen(5000)