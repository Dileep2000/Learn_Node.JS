const {readFile} = require('fs')
console.log("Started a first task")
readFile('./src/component/static/first.txt','utf8',(err,res)=>{
    if(err) {
        console.log(err)
        return
    }
    console.log(res)
    console.log("Completed first task")
})
console.log("Starting next task")