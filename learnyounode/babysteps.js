// set inital value
var sum_numbers = 0

// loop through command-line arguments from index 2 to the end
for (var i = 2; i < process.argv.length; i++)
  sum_numbers += Number(process.argv[i])

console.log(sum_numbers)