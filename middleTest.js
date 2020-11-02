
const assertArraysEqual = require("./assertArraysEqual");
const middle = require("./middle");
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6,7,8,9,10]));
console.log(middle([1,2,3,4,5,6,7,8,9,10,11,12]));

assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4,5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10,11,12]),[6,7]);