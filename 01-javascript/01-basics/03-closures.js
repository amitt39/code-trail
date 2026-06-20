// Write a function called makeMultiplier that takes a number x and returns a function. That returned function takes another number y and returns x * y.

function makeMultiplier(x) {
  return function (y) {
    return x * y;
  }
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
console.log(double(8));  // 16
