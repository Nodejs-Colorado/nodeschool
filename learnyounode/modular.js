// require the modular_filer module
var filter_function = require('./modular_filter.js')

// grab path name from command line
var path_name = process.argv[2]
// grab file extension from command line
var file_extension = process.argv[3]

// use the filter module to read the directory, grab callback
filter_function(path_name, file_extension, function (err, list_of_files) {
  if (err)
    return console.error(err)

  list_of_files.forEach(function (file) {
    console.log(file)
  })
})