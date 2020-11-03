const assert = require('chai').assert;

const countLetters = require("../countLetters");

let r = "lighthouselabs";
let c = countLetters(r);


describe("#countLetters", () => {
  it("returns 2 for lhl", () => {
    assert.strictEqual(c["l"],2);
  });
  
});