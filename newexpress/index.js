const express = require('express');
const path = require('path');

const app = express()
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs')

// console.log(publicPath)

// app.use(express.static(publicPath))


app.get('', (req, res) => {

    // let a = req.query.name;
    // res.send('hello, this is home page<a href="/about">About</a>');
    res.sendFile(`${publicPath}/index.html`)

});


app.get('/about', (req, res) => {

    // res.send(`<input type = "text" placeholder="user name" />
    //            <button>Submit</button><a href="/">Home</a>`);
    // res.sendFile(`${publicPath}/about.html`)


});

app.get('/homes', (req, res) => {

 res.sendFile(`${publicPath}/home.html`)
    // res.send([
    //     {
    //     name: "atul",
    //     age:25
    //     },
    //     {
    //     name: "atul",
    //     age:25
    //      },
    // ]);

});

app.get('/profile', (req, res) => {
    const user = {
        "name": "atul",
        "age": "25",
        "skills": ['php','js','node']
    }

    res.render('profile',{user});

});

app.get('/login', (req, res) => {

    res.render('login');

});

app.get('*', (req, res) => {

    res.sendFile(`${publicPath}/404.html`)

    // res.send([
    //     {
    //     name: "atul",
    //     age:25
    //     },
    //     {
    //     name: "atul",
    //     age:25
    //      },
    // ]);

});




app.listen(8000)
