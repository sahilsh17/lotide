const countLetters = function(inputString) {
  let result = {};
  for (let c of inputString) {
    if (result[c]) {
      result[c] += 1;
    } else {
      result[c] = 1;
    }
  }
  return result;


};

module.exports = countLetters;