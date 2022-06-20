const {readFile, writeFile} = require('fs')

readFile('./src/component/static/first.txt', 'utf8' , (err,result)=> {
    if(err) {
        console.log(err)
        return
    } else {
        console.log(result)
    }
})

writeFile('./src/component/static/fourth.txt',"This is a fourth file",(err,result) => {
    if(err) {
        console.log(err)
    } else {
        console.log(result)
    }
})