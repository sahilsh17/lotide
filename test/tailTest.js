const tail = require("../tail.js");
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [sharma] for [sahil, sharma]", () => {
    assert.deepEqual(tail(["sahil","sharma"]),["sharma"]);
  });
  it("returns [sahil,sharma] for [hello,sahil,sharma]", () => {
    assert.deepEqual(tail(["hello","sahil","sharma"]), ["sahil","sharma"] ); 
  });
});