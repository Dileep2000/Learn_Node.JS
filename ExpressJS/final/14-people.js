const express = require("express");
const router = express.Router();
let {people} = require('./../data')

router.get('/',(req,res)=>{
    res.status(200).json({success:true,data: people})
})

router.post('/',(req,res)=>{
    let {name} = req.body
    if(name) {
        people.push({id:people.length+1,"name":name})
        return res.status(200).json({success:true,person:name})
    }
    res.status(401).json({success:false,msg: "Please provide name value"})
})

router.put('/:id', (req, res) => {
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
  
router.delete('S/:id', (req, res) => {
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


module.exports = router