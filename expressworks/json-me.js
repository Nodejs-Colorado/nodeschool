var express = require('express');
var fs = require('fs')

var app = express()

app.get('/books', function(req, res){
  var filename = process.argv[3] // grab file name from command line arg
  fs.readFile(filename, function(err, data) {
    if (err) return res.send(500)
    try {   // try to parse
      books = JSON.parse(data)
      res.json(books) // if able to parse, respond back
    } catch (error) { // if error handle it
      res.send(500) // bad practice - silencing errors
    }
  })
})

app.listen(process.argv[2]) // listen on supplied port