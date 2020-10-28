const assertEqual = function(actual,expected) {

  if (actual !== expected) {
    return "❌❌❌Assertion Failed";
  } else {
    return "✅✅✅Assertion Passed";
  }

};
const findKeyByValue = function(object,value) {
  for (let i in object) {
    
    if (object[i] === value)
      return i;

  }

};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre,"Brooklyn Nine-Nine"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));