var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'jade')    // use jade
app.set('views',path.join(__dirname,'/templates')) // look in templates folder for jade file

app.get('/home', function(req, res) {

  res.render('index', {date: new Date().toDateString()}) // pass date into jade

}).listen(process.argv[2]);