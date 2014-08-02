var http = require('http');  // require http client
var fs = require('fs');      // access file system

// console.log(process.argv[3])

// create server
http.createServer(function(req, res){
  fs.createReadStream(process.argv[3]).pipe(res); // pipe method used to convert command line arg to HTTP response
}).listen(process.argv[2]) // grab port from first command line arg











