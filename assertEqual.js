const assertEqual = function(actual,expected) {

  if(actual !== expected)
  {
    return "✅✅✅ Assertion Failed";
  }
  else{
    return "❌❌❌ Assertion Passed";
  }

};

console.log(assertEqual("Lighthouse labs","bootcamp"));
console.log(assertEqual(1,1));
console.log(assertEqual(1,1));
console.log(assertEqual("sahil","sahil"));