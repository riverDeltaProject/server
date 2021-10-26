const express = require("express");
const path = require('path');
const app = express()
const port = "8080";
const cors = require('cors');

const http = require('http').createServer(app);

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

app.use(cors());

app.use(express.static(path.join(__dirname, 'Frontend/build')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './Frontend/build/index.html'))
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, './Frontend/build/index.html'))
})

http.listen(port, ()=>{
    console.log("START");
})