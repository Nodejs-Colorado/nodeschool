var express = require('express');
var connect = require('connect');
var app = express();

app.use(connect.urlencoded()) // middleware

app.post('/form', function(req, res) {

  res.send(req.body.str.split('').reverse().join(''))

}).listen(process.argv[2]);