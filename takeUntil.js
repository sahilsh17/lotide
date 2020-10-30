const takeUntil = function(array, callback) {
  let a = [];
  for (let item of array) {
    if (!callback(item)) {
      a.push(item);
    } else {
      return a;
    }

  }
  return a;
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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1,2,3,4,5,6,7,8,9,10];
const result3 = takeUntil(data3, x => x > 6);
console.log(result3);
assertArraysEqual(result3,[1,2,3,4,5,6]);