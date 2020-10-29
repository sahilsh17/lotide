const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual,expected)) {
    return `✅✅✅Assertion Passed ${inspect(actual)}===${inspect(expected)}`;
  } else {
    return `❌❌❌Assertion Failed ${inspect(actual)}===${inspect(expected)}`;
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
const eqObjects = function(object1,object2) {
  let a = Object.keys(object1);
  let b = Object.keys(object2);
  if (a.length !== b.length) {
    return false;

  }
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(object1[a[i]]) && Array.isArray(object2[a[i]])) {
      if (eqArrays(object1[a[i]],object2[a[i]]) === false) {
        return false;
      }
    } else if (object1[a[i]] !== object2[a[i]]) {
      return false;
    }
  }
  return true;

};

console.log(assertObjectsEqual({name:"sahil",age:25},{age:25,name:"sahil"}));
console.log(assertObjectsEqual({name:"kevin",age:19},{age:25,name:"sahil"}));
console.log(assertObjectsEqual({name:"kevin",age:19,marks:[100,80]},{marks:[100,80], age:19,name:"kevin"}));