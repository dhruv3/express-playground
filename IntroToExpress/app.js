var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Welcome!")
})

app.listen(8000, '127.0.0.1');