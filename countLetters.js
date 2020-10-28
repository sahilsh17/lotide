const assertEqual = function(actual,expected) {

  if (actual !== expected) {
    return "❌❌❌Assertion Failed";
  } else {
    return "✅✅✅Assertion Passed";
  }

};

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
let r = "lighthouselabs";
let c = countLetters(r);
console.log(countLetters("sahil sharma"));
console.log(assertEqual(c["l"],2));
console.log(assertEqual(c["t"],0));
