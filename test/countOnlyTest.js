const assert = require('chai').assert;
const countOnly = require("../countOnly");
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
describe("#findKeyByValue", () => {
  it("returns 1", () => {
    assert.strictEqual(result1["Jason"],1);
  });
  it("returns 2", () => {
    assert.strictEqual(result1["Fang"],2 );
  });
});
