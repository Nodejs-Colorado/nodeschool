// access file system
var fs = require('fs')
// utilize path module for directory manipulation
var path = require('path')

// module.exports returns the results of the inner return
// what's the difference between 'exports' and module.exports
// don't know? test it
module.exports = function(directory, file_extension, callback) {

  fs.readdir(directory, function handle_callback(err, data) {
    // console.log(data) // data is an array
    if (err) {
      return callback(err); // if error, return it
    }
      process_data(data, file_extension); // else pass data to processing function
  });

  function process_data(array_object, file_extension) {
    // filter creates a new array called `list_of_files`
    list_of_files = array_object.filter(function (file) {
      return path.extname(file) === '.' + file_extension
    })
    // console.log(list_of_files) // array of files matching correct file extension
  callback(null, list_of_files) // why null here?
  }
};
