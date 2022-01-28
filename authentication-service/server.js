const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Browser');
});

app.post('/login', (req, res) => {
    console.log(JSON.stringify(req.body));
    if(req.body.userName =="Giclops" && req.body.password=="P@ssw0rd"){
        res.send("Welcome!");
    } else {
        res.send("Get thee hence, HACKER!!");
    }
})

app.listen(port, ()=>{});