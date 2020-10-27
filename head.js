const assertEqual = function(actual,expected) {

  if(actual !== expected)
  {
    return "❌❌❌ Assertion Failed";
  }
  else{
    return "✅✅✅ Assertion Passed";
  }

};
const head = function(a){
  return a[0];
}
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([5]), 5));
console.log(head([]));