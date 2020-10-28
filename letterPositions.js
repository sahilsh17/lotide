const letterPositions = function(inputString) {
  const results = {};
  for (let i = 0; i < inputString.length; i++) {
    if (results[inputString[i]]) {
      results[inputString[i]].push(i);
    } else {
      results[inputString[i]] = [i];
    }
  }


  return results;

};
const assertArraysEqual = function(a,b) {
  if (eqArrays(a,b)) {
    console.log("✅✅✅Assertion Passed");
  } else {
    console.log("❌❌❌Assertion Failed");
  }
};
const eqArrays = function(a,b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    
    if (a[i] !== b[i]) {
      return false;
    }
   
  }
  return true;
};

console.log(letterPositions("test"));
console.log(letterPositions("sahil"));

assertArraysEqual(letterPositions("sahil").h,[2]);