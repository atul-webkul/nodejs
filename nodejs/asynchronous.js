let a = 10;
let b = 0;


let waitingData = new Promise((resolve,reject) => {
setTimeout(() => {
    resolve(b)
}, 2000);
})

waitingData.then((data) => {
    b = data;
    console.log(a + b)
});
