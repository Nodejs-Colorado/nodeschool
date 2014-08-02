var express = require('express');
var crypto = require('crypto');
var app = express();

app.put('/message/:id', function(req, res){ // handle query parameters
  var id = req.params.id // grab parameter
  var hash = crypto.createHash('sha1'); // create hash
  hash.update(new Date().toDateString() + id) // add date and it
  hash.digest('hex') // ?
  res.send(hash) // respond with hash
})

app.listen(process.argv[2])