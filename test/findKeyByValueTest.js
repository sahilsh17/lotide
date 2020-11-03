const assert = require('chai').assert;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns comedy", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"Brooklyn Nine-Nine"),"comedy");
  });
  it("returns drama", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});