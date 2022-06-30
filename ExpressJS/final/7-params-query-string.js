// Params
const {products} = require('./data')
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProduct)
})

// app.get('/api/products/1',(req,res)=>{
//     const singleProduct = products.find((product)=> product.id === 1)
//     res.json(singleProduct)
// })

// Route Parameters
app.get('/api/products/:id',(req,res)=>{
    const singleProduct = products.find((product)=> product.id === Number(req.params.id))
    if(singleProduct === undefined) {
        res.status(404).send('<h1>No Product Found</h1>')
    } else {
        res.json(singleProduct)
    }
})
app.get('/api/products/:id/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send("Hello")
})
// Query Strig parameters

app.get('/api/product/query',(req,res)=>{
    // console.log(req.query)
    let sorteProducts = [...products]
    const {search,limit} = req.query
    // res.send("Hello World")
    if(search) {
        sorteProducts = sorteProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit) {
        sorteProducts = sorteProducts.slice(0,Number(limit))
    }
    if(sorteProducts.length < 1) {
        return res.status(200).send('No products matched your search')
    }
    return res.status(200).json(sorteProducts)
})

app.listen(5000,()=>{
    console.log("Server is listening on port 5000....")
})

