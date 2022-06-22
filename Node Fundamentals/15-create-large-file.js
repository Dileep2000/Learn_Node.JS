const {writeFileSync} = require('fs')

for(let i=0;i<10000;i++){
    writeFileSync('./src/component/static/large.txt','This is a large file with repetative text \n',{flag:'a'})
}