// calculate(10, 5, "add")       → 15
// calculate(10, 5, "divide")    → 2
// calculate(10, 5, "mod")       → "invalid operation"

// Write a function called calculate that takes three arguments — two numbers and an operation string.

function calculate(num1, num2, operation) {

  switch (operation) {
    case "addition":
      return num1 + num2;

    case "subtract":
      return num1 - num2;

    case "multiply":
      return num1 * num2;

    case "divide":
      return num1 / num2;

    default:
      return "Invalid operation"
      break;
  }

}

let addition = calculate(10, 5, "addition");
console.log("Addition = " + addition);

let subtraction = calculate(10, 5, "subtract");
console.log("Subtraction = " + subtraction);

let multiplication = calculate(10, 5, "multiply");
console.log("Multiplication = " + multiplication);

let divison = calculate(10, 5, "divide");
console.log("Divison = " + divison);

divison = calculate(10, 5, "mod");
console.log("Divison = " + divison);
