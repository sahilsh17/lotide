const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;


describe("#assertArraysEqual", () => {
  it("returns arrays are equal", () => {
    assert.strictEqual(assertArraysEqual([1,2,3,4],[1,2,3,4]),"✅✅✅Assertion Passed");
  });
  it("returns sahil for sahil", () => {
    assert.strictEqual(assertArraysEqual(['1','2','3',4],[1,2,3,4]), "❌❌❌Assertion Failed" ); 
  });
});