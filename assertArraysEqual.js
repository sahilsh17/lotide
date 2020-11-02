const eqArrays = require("./eqArrays");

const assertArraysEqual = function(a,b) {
  if (eqArrays(a,b)) {
    console.log("✅✅✅Assertion Passed");
  } else {
    console.log("❌❌❌Assertion Failed");
  }
};
module.exports = assertArraysEqual;
