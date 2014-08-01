// require http client
var http = require('http')
// grab the url
var url = process.argv[2]


http.get(url, function (response) {

  // console.log(response) // output full reponse

  // '.on' binds the callback (response) to an event
  response.on('data', function (chunk) {
    console.log(chunk.toString());}
  );
  response.on('error', function (chunk) {
    console.log(chunk.toString());}
  );

})