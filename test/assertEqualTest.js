const assert = require('chai').assert;

const assertEqual = require("../assertEqual");


describe("#assertEqual", () => {
  it("returns failed", () => {
    assert.strictEqual(assertEqual("lighthouse labs", "bootcamp"),"✅✅✅Assertion Passed");
  });
  it("returns sahil for sahil", () => {
    assert.strictEqual(assertEqual("sahil","sahil"), "✅✅✅Assertion Passed" ); 
  });
});
