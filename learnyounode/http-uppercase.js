var http = require('http');  // require http client
var map = map = require('through2-map');

// create server
http.createServer(function(req, res){
  if (req.method == 'POST') {
    req.pipe(map(function (chunk) { //grab the request
        // console.log(chunk)
      return chunk.toString().toUpperCase(); // convert it to a string, upper case it
    })).pipe(res); // send it back
  } else {
    res.end();
  }
}).listen(process.argv[2]) // grab port from first command line arg
