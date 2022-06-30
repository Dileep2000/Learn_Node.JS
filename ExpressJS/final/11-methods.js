//  Methods
//  GET
const express = require('express')
const app = express()

let {people} = require('./data')
// GET
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data: people})
})
// Post
app.use(express.static('./public'))
app.use(express.urlencoded({extended:false}))
app.post('/login',(req,res)=>{
    let {name} = req.body
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send("Please provide credentials")
})
app.use(express.json())
app.post('/api/people',(req,res)=>{
    let {name} = req.body
    if(name) {
        people.push({id:people.length+1,"name":name})
        return res.status(200).json({success:true,person:name})
    }
    res.status(401).json({success:false,msg: "Please provide name value"})
})
// PUT
app.put('/api/people/:id', (req, res) => {
const { id } = req.params
const { name } = req.body

const person = people.find((person) => person.id === Number(id))

if (!person) {
    return res
    .status(404)
    .json({ success: false, msg: `no person with id ${id}` })
}
const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
    person.name = name
    }
    return person
})
res.status(200).json({ success: true, data: newPeople })
})
// DELETE
app.delete('/api/people/:id', (req, res) => {
const person = people.find((person) => person.id === Number(req.params.id))
if (!person) {
    return res
    .status(404)
    .json({ success: false, msg: `no person with id ${req.params.id}` })
}
const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
)
return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})