const assertEqual = function(actual,expected) {

  if (actual !== expected) {
    return "❌❌❌Assertion Failed";
  } else {
    return "✅✅✅Assertion Passed";
  }

};
const eqObjects = function(object1,object2) {
  let a = Object.keys(object1);
  let b = Object.keys(object2);
  if(a.length !== b.length) {
    return false;

  }
  for (let i = 0; i < a.length; i++) {
    if(object1[a[i]] !== object2[a[i]]) {
      return false;
    }

  }
  return true;

};
const ob1 = {name:"sahil",age:"25",number:[1,2,3,4]};
const ob2 = {name:"sahil",age:"25",number:[1,2,3,4]};

console.log(eqObjects(ob1,ob2));