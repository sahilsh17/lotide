const tail = require("../tail.js");
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns ahil for sahil", () => {
    assert.strictEqual(tail("sahil"),"ahil");
  });
  it("returns ello for hello", () => {
    assert.strictEqual(tail("hello"), "ello" ); 
  });
});