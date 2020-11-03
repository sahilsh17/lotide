const assert = require('chai').assert;
const findKeys = require("../findKeys");


describe("#findKeys", () => {
  it("returns noma", () => {
    assert.strictEqual(findKeys({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2),"noma");
  });
  it("returns Akaleri", () => {
    assert.strictEqual(findKeys({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 3), "Akaleri" ); 
  });
});
