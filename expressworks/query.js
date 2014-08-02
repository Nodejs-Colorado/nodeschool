var express = require('express');
var app = express();

app.get('/search', function(req, res){
  var query = req.query // grab data from query string
  // console.log(query)
  res.send(query) // respond with query string
})

app.listen(process.argv[2]) // listen on supplied port