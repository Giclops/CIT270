const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const md5 = require('md5');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Browser');
});

app.post('/login', (req, res) => {
    let passHash = md5(req.body.password);
    let userHash = md5(req.body.userName);
    if(userHash =='eb3d6ae2d348f2295f649048cd58ca23' && passHash=='189972a5f5418599d4e38031896721a4'){
        res.send("Welcome!");
    } else {
        res.send("Get thee hence, HACKER!!");
    }
})

app.listen(port, ()=>{});