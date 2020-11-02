

const middle = function(a) {
  let l = a.length;
  if (l === 0 || l === 1 || l === 2) {
    return [];
  } else if (l % 2 === 0) {
    return [a[(l / 2) - 1],a[l / 2]];
  } else if (l % 2 !== 0) {
    return [a[Math.ceil(l / 2) - 1]];
  } 
};
module.exports = middle;
