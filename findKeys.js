const assertEqual = function(actual,expected) {

  if(actual !== expected)
  {
    return "❌❌❌Assertion Failed";
  }
  else{
    return "✅✅✅Assertion Passed";
  }

};
const findKeys = function(ob,callback) {
  let num;
  let key;

  for(let item in ob) {
    num = ob[item];
    key = Object.keys(num);

    if (callback(num)) {
      console.log(item);
      break;
    }
  }

};
findKeys({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

findKeys({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);
