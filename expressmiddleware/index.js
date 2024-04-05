const express = require('express');
const app = express();
const reqFilter = require('./middleware/middleware')

const route = express.Router();

//For whole route
// app.use(reqFilter);

route.use(reqFilter)

app.get("/", (req, res) => {
    res.send("hiiii");
})

route.get("/users", (req, res) => {
    res.send("users");
})

route.get("/contact", (req, res) => {
    res.send("contattt");
})

app.use('/',route);

app.listen("9090")
