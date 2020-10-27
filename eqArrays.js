const assertEqual = function(actual,expected) {

  if (actual !== expected) {
    return "❌❌❌Assertion Failed";
  } else {
    return "✅✅✅Assertion Passed";
  }

};

const eqArrays = function(a,b) {
  let c;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      c = true;
    } else {
      c = false;
    }
  }
  return c;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
