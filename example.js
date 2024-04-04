const fs = require('fs');
var a = 10;
var b = 20;
var c = 10;

const app = require('./app')

if (a === c ){
    // console.log(a + b + c)

}



for (let i = 0; i <= a; i++) {
// console.log(i)
}

// console.log(app.arr)

const arr = [2, 3, 4, 3, 2, 2, 4, 4, 3, 2, 2];

let res = arr.filter((item) => {
    return item == 2;
})

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

