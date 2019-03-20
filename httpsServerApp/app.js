// var fs = require('fs')
// var https = require('https')
// var key = fs.readFileSync('./lh-key.pem')
// var cert = fs.readFileSync('./lh-cert.pem')
// var http_options = {
//   key: key,
//   cert: cert
// }
// var HOST = 'localhost'
// var express = require('express');
// var path = require('path');

// var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// server = https.createServer(http_options, app).listen(3000, HOST);
// app.get('/hello', function(req, res){
//   res.send("Hello from https server");
// })
// app.post('/hi', function(req, res){
//   res.send("A post to an https server");
// })

var http = require('http');
http.createServer(function(req, res){
  res.writeHead(301, {
    "location": "https://github.com/dhruv3"
  })
  res.end();
}).listen(3000, "127.0.0.1")
console.log("Checkpoint")