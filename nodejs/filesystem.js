//to create or read in folder

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files')
console.log(dirPath)
// fs.writeFileSync("apple.txt","fcsdfdscsdcsadfsdf")
// for (let i = 0; i <= 5; i++){
//     fs.writeFileSync(`${dirPath}/hello${i}`,"dfasdfaswfaadas")
// }

fs.readdir(dirPath,(err, files) => {
    files.forEach((item) => {
        console.log(item)
    });
})
