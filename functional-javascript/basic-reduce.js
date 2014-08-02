module.exports  = function countWords(array_of_words) {
  return array_of_words.reduce(function(results, word) {
    results[word] = ++results[word] || 1 // increment or initialize to 1 - ?
    return results
  }, {}) // second argument to reduce results to {}
}
