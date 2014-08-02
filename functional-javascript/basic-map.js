// loop
module.exports = function repeat_loop(operation, num) {
  if (num > 0) {
    for (i=0; i<num; i++) {
      operation()
    };
  };
};


// // recursion
// module.exports = function repeat_recursion(operation, num) {
//   if (num > 0) {
//     operation();
//     return repeat(operation, num - 1);
//   };
// };


module.exports = function double(numbers) {
  return numbers.map(function (number) {
    return number * 2;
  });
}