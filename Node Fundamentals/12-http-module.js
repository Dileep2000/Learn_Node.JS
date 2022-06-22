// HTTP
const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.write("Welcome to our home page")
        res.end()
    }
    if(req.url === '/about') {
        res.write("Welcome to our ablot page")
        res.end()
    }
    // res.end(`
    // <h1>Opps!</h1>
    // <p>We can't seem to find the page you are looking fot</p>
    // <a herf="/"><Back to Home/a>
    // `)
})
server.listen(5000)