module.exports = function double(numbers) {
  return numbers.map(function (number) {
    return number * 2;
  });
}