// Here's the task:
// Open index.ts in your ts-fundamentals project and write these three functions:

// identity — takes any value, returns that same value
// first — takes an array, returns the first element (or undefined if empty)
// last — takes an array, returns the last element (or undefined if empty)

// All three should be generic — no any anywhere.

function indentity<T>(value: T): T {
  return value;
}

function first<T>(value: T[]): T | undefined {
  if (value.length === 0) {
    return undefined;
  } else {
    return value[0];
  }
}

function last<T>(value: T[]): T | undefined {
  if (value.length === 0) {
    return undefined;
  } else {
    return value[value.length - 1];
  }
}
