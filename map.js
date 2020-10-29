const map = function(array,callback) {
  
const results = [];
for(let item of array) {
  results.push(callback(item));
}
return results;
};
const eqArrays = function(a,b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    
    if(a[i]!==b[i]) {
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

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
console.log(map(["sahil","sharma","sylvester","stallone"],word => word[0]));
assertArraysEqual(map(["sahil","sharma","sylvester","stallone"],word => word[0]),["s","s","s","s"]);