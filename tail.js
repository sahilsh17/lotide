const assertEqual = function(actual,expected) {

  if (actual !== expected) {
    return "✅✅✅ Assertion Failed";
  } else {
    return "❌❌❌ Assertion Passed";
  }

};
const tail = function(a) {
  let b = a.slice(1);
  return b;
};

console.log(tail(["sahil","sharma","kevin"]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!