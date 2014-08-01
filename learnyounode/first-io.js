// access file system
var fs = require('fs')

// read file using the readFileSync() method
var read_file_as_buffer_object = fs.readFileSync(process.argv[2])
// console.log(typeof read_file_as_buffer_object)

// convert buffer file to string
var convert_buffer_to_string = read_file_as_buffer_object.toString()
// console.log(typeof convert_buffer_to_string)
// console.log(convert_buffer_to_string)

var count_lines = convert_buffer_to_string.split("\n").length - 1
console.log(count_lines)