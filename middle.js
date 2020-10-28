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
const assertArraysEqual = function(a,b) {
  if (eqArrays(a,b)) {
    console.log("✅✅✅Assertion Passed");
  } else {
    console.log("❌❌❌Assertion Failed");
  }
};

const middle = function(a) {
  let l = a.length;
  if (l === 0 || l === 1 || l === 2) {
    return [];
  } else if (l % 2 === 0) {
    return [a[(l / 2) - 1],a[l / 2]];
  } else if (l % 2 !== 0) {
    return [a[Math.ceil(l / 2) - 1]];
  } 
};
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6,7,8,9,10]));
console.log(middle([1,2,3,4,5,6,7,8,9,10,11,12]));

assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4,5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10,11,12]),[6,7]);