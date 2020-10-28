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
  
const without = function(a,b) {
  let c = [];
  let d;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {

      if (a[i] !== b[j]) {
        d = true;
      }   else {
        d = false;
      }
    
    
    } 
    if (d) {
      c.push(a[i]);
    } 
  }
  return c;

};

console.log(without([1,2,3],[1])); 
console.log(without(["1", "2", "3"],[1, 2, "3"])); 
const words = ["sahil", "sharma", "kevin"];
console.log(without(words,["kevin"]));
console.log(words);
assertArraysEqual(words,["sahil", "sharma", "kevin"]);