var http = require("http"); // require http client
var results = []; // container to hold data
var counter = 0;
var urls = process.argv.slice(2); // all urls

// loop through urls
urls.forEach(function (url, index) {

  http.get(url, function (response) {
    var all_data = '' // variable for collecting all data
    // '.on' binds the callback (response) to an event
    response.on("data", function (chunk) {
      all_data += chunk.toString(); // concatenate all chunks of data
    });
    // verifies everything all data has been sent from the server
    response.on("end", function () {
      counter += 1;
      results[index] = all_data; // add data to array

      if (counter == 3) {
        output_results()
      }
    });
  });
});

// loop through array, outputting each element
function output_results () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}