
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require('chai').assert;



describe("#middle", () => {
  it("returns nothing for [1,2]", () => {
    assert.deepEqual(middle([]),[]);
    assert
  });
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]); 
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]); 
  });
  it("returns [5,6] for [1,2,3,4,5,6,7,8,9,10]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6]); 
  });

});