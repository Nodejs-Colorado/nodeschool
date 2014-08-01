// require http client
var http = require('http');
// grab the url
var url = process.argv[2];
// variable for collecting all data
var all_data = '';

http.get(url, function (response) {

  // console.log(response) // output full reponse

  // '.on' binds the callback (response) to an event
  response.on('data', function (chunk) {
    all_data += chunk.toString(); // concatenate all chunks of data
  });
  // verifies everything all data has been sent from the server
  response.on('end', function() {
    console.log(all_data.length)
    console.log(all_data)
  });
  response.on('error', function (chunk) {
    console.log(chunk.toString());
  });

});