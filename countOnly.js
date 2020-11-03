
const countOnly = function(allItems,itemsToCount) {

  const result = {};
  for (const items of allItems) {
    if (itemsToCount[items]) {
      if (result[items]) {
        result[items] += 1;
      }  else {
        result[items] = 1;
      }
    }
  }
  return result;
};


module.exports = countOnly;