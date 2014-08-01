// access file system
var fs = require('fs')
// utilize path module for directory manipulation
var path = require('path')

// grab path name from command line
var path_name = process.argv[2]
// grab file extension from command line
var file_extension = process.argv[3]

// read directory using the readdir() method, grab callback
fs.readdir(path_name, function handle_callback(err, data) {
  // console.log(data) // data is an array
  if (err) {
    throw err; // if error, throw error
  }
  process_data(data, file_extension); // else pass data to processing function
});

function process_data(array_object, file_extension) {
  // loop through each file, if extension matches, output it to the screen
  array_object.forEach(function (file) {
    if (path.extname(file) === '.' + file_extension)
       console.log(file)
  });
};