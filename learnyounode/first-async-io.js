// access file system
var fs = require('fs')
// grab command line args
var file = process.argv[2]

// read file using the readFile() method, grab callback
fs.readFile(file, function handle_callback(err, data) {
  if (err) {
    throw err; // if error, throw error
  }
  process_data(data); // else pass data to processing function
});

function process_data(buffer_object) {
  var count_lines = buffer_object.toString().split("\n").length - 1
  console.log(count_lines);
}