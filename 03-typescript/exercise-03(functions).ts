// Write a function add that takes two numbers and returns a number. Then write a function greet that takes a name string and an optional greeting string — if greeting is provided it returns "{greeting}, {name}!", otherwise it returns "Hello, {name}!".
// Type everything explicitly — parameters and return types both.

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}`;
}

// Next: default parameters.
// Same as JS defaults, just typed. Write a function createSlug that takes a title string and a separator string that defaults to "-". It should return the title lowercased with spaces replaced by the separator.

function createSlug(title: string, seperator = "-"): string {
  return `${title.toLowerCase().split(" ").join(seperator)}`;
}

console.log(createSlug("HELLO World"));

// Your exercise:
// Write a function getLength with two overloads:

// If passed a string, returns the number of characters
// If passed an array, returns the number of elements

// Write both overload signatures, then the implementation.

function getLength(str: string): number;
function getLength(arr: any[]): number;

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
}
