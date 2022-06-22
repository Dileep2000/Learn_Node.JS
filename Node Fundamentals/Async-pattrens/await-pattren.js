const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// readFile('./src/component/static/first.txt','utf8',(err,data)=>{
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })
// Turning this into promise will fix the blocking problem
// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile('./src/component/static/first.txt','utf8',(err,data)=>{
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
// const readFilePromice = util.promisify(readFile)
// const writreFilePromice = util.promisify(writeFile)

// getText('./src/component/static/first.txt').then(result=> console.log(result)).catch(err => {
//     console.log(err)
// })

const start = async() => {
    try {
        const first = await readFile('./src/component/static/first.txt','utf8')
        const second = await readFile('./src/component/static/second.txt','utf8')
        console.log(first)
    } catch (error) {
        console.log(error)
    }
}
start()