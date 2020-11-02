const assertEqual = function(actual,expected) {

  if(actual !== expected)
  {
    return "❌❌❌Assertion Failed";
  }
  else{
    return "✅✅✅Assertion Passed";
  }

};
module.exports = assertEqual;
