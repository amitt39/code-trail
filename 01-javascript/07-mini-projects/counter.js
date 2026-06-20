// Counter
// Start at 0
// Can increment by 1
// Can decrement by 1
// Can reset back to 0
// Print the current count after every action



function counter() {

  let count = 0;

  return function (operation) {

    switch (operation) {
      case "increase":
        return function () {
          count++;
          return count;
        }

      case "decrease":
        return function () {
          count--;
          return count;
        }
      case "reset":
        return function () {
          count = 0;
          return count;
        }
      default:
        return "Invalid Operation"

    }

  }
}

let counterApp = counter();
let increment = counterApp("increase");
let decrement = counterApp("decrease");
let reset = counterApp("reset");

console.log(increment()); // 1
console.log(increment()); // 2
console.log(decrement()); // 1
console.log(decrement()); // 0
console.log(decrement()); // -1
console.log(decrement()); // -2
console.log(increment()); // -1
console.log(reset()); // 0
