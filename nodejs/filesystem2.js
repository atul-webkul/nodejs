const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"crud");
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,"first crud")

// fs.readFile(filePath, "utf8",(err, item) => {
//     console.log(item)
// })


// fs.appendFile(filePath, "and sencond patyh of this file", (err) => {
//     if (!err) {
//         console.log("updatted")
//     }
// })


// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log("renamed")
//     }
// })

fs.unlinkSync(`${dirPath}/fruit.txt`)
