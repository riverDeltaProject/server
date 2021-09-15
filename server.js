const express = require("express");
const path = require('path');
const app = express()
const port = 8080;

const http = require('http').createServer(app);

http.listen(port, ()=>{
  
    console.log("START");
})

app.use(express.static(path.join(__dirname, 'Frontend/build')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './Frontend/build/index.html'))
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, './Frontend/build/index.html'))
})
