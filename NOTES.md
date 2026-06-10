# JavaScript Notes — Interview Ready

---

# Scope

Scope defines where a variable is accessible from in the code.

## Types of Scope

### Global Scope
- Variables defined outside any function or block `{}`
- Accessible from anywhere in the code

```js
let name = "Amit"; // global — accessible everywhere
```

### Local / Function Scope
- Variables defined inside a function
- Only accessible within that function
- Destroyed after the function finishes

```js
function greet() {
  let message = "Hello"; // local — only accessible inside greet
}
console.log(message); // ReferenceError
```

### Block Scope
- Variables defined inside any `{}` block (if, for, while)
- Only `let` and `const` respect block scope — `var` does not

```js
if (true) {
  let x = 10;  // block scoped
  var y = 20;  // NOT block scoped — leaks out
}
console.log(y); // 20 — var leaked out
console.log(x); // ReferenceError — let stayed inside
```

## var vs let vs const

| | var | let | const |
|---|---|---|---|
| Scope | Function | Block | Block |
| Re-assignable | Yes | Yes | No |
| Use it? | Never | Yes | Yes (default) |

**Rule:** Always use `const` by default. Use `let` only when you need to reassign. Never use `var`.

## Scope Chain
When JS can't find a variable in the current scope, it looks in the outer scope. Keeps going up until global scope. If still not found — ReferenceError.

## Shadowing
When an inner variable has the same name as an outer one — inner one wins inside its own scope.

```js
let name = "Amit";
function greet() {
  let name = "Stranger"; // shadows outer name
  console.log(name); // "Stranger"
}
console.log(name); // "Amit" — outer unchanged
```

**Interview:** What is the difference between var, let, and const? → var is function scoped and can be redeclared anywhere. let and const are block scoped. const can't be reassigned. Always prefer const, then let, never var.

---

# Closures

A closure is when an inner function remembers variables from its outer function — even after the outer function has finished running.

```js
function makeCounter() {
  let count = 0; // this should be destroyed after makeCounter finishes

  return function() {
    count++;
    console.log(count);
  }
}

const counter = makeCounter(); // makeCounter is done — but count survives
counter(); // 1
counter(); // 2
counter(); // 3
```

## How it works
- `makeCounter()` runs and finishes
- Normally `count` would be erased from memory
- But the returned function still needs `count`
- JS sees this and keeps `count` alive — that's the closure

## Lexical Scope Chain
When a variable is not found in the current function, JS looks in the parent function. This chain of looking outward is called the lexical scope chain.

- Inner function can see outer function's variables ✓
- Outer function cannot see inner function's variables ✗
- Nothing outside can see what's inside a function ✗

## Real Use Cases
- **Private variables** — `count` in the counter example can't be touched directly from outside
- **Maintaining state** — `count` persists across multiple calls
- **Factory functions** — `makeMultiplier(2)` creates a reusable doubling function

```js
function makeMultiplier(x) {
  return function(y) {
    return x * y; // x is remembered from outer function
  }
}

const double = makeMultiplier(2);
double(5); // 10
double(8); // 16
```

**Interview:** What is a closure? → A function that retains access to variables from its outer scope even after the outer function has returned.

**Interview:** What is the difference between `return fn` and `return fn()`? → `return fn` hands over the function itself. `return fn()` calls it immediately and returns the result.

---

# Higher Order Functions

A higher order function is a function that either:
- Takes a function as an argument, OR
- Returns a function

`map`, `filter`, `reduce` are all built-in higher order functions that work on arrays. They handle the looping internally — you just provide the logic.

---

## map

Used when you want to **transform every item** in an array and get a new array back.

- Always returns a new array of the **same length**
- Never changes the original array
- If you don't return anything inside — you get `undefined` for that slot

```js
const prices = [100, 200, 300];
const withGST = prices.map(price => price + price * 0.18);
// [118, 236, 354]
```

**Use when:** You want to do something to every item and collect the results.

**Interview:** What's the difference between map and forEach? → map returns a new transformed array. forEach returns undefined — it just runs a function on each item.

---

## filter

Used when you want to **keep only certain items** based on a condition.

- Returns a new array — can be shorter than the original
- Your function must return `true` (keep) or `false` (drop)
- Never changes the original array

```js
const students = [{ name: "Amit", marks: 85 }, { name: "Sara", marks: 42 }];
const passing = students.filter(student => student.marks > 40);
```

**Use when:** You want a subset of the array based on a condition.

**Interview:** Can filter change the length of the array? → Yes, it only keeps items where the condition returns true.

---

## reduce

Used when you want to **boil an entire array down to one single value** — a number, string, object, anything.

- Takes an accumulator (`acc`) — the running result
- Takes a current item (`curr`) — the current item being processed
- Second argument is the starting value of `acc`

```js
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
// 0 → 1 → 3 → 6 → 10 → 15
```

**Starting value always goes into `acc`. `curr` starts from the next item.**

**Use when:** You want one output from an entire array — total, average, max, min, count.

**Interview:** What happens if you don't provide a starting value? → The first array item becomes `acc` and `curr` starts from the second item. Safe for simple numbers but can cause bugs with objects — always provide a starting value.

---

## Arrow Functions

A shorter, cleaner syntax for writing functions. Same behaviour as regular functions with one key difference — no own `this`.

```js
// regular function
function double(num) {
  return num * 2;
}

// arrow — full
const double = (num) => {
  return num * 2;
}

// arrow — single param, drop brackets
const double = num => {
  return num * 2;
}

// arrow — single line, implicit return (no return keyword needed)
const double = num => num * 2;

// no params — empty brackets required
const greet = () => console.log("Hello");

// multiple params — brackets required
const add = (a, b) => a + b;
```

## this in arrow functions
Arrow functions don't have their own `this`. They borrow `this` from wherever they were written.

```js
const person = {
  name: "Amit",
  greet: function() {
    console.log(this.name); // "Amit" — this = person
  },
  greetArrow: () => {
    console.log(this.name); // undefined — this = global scope
  }
}
```

**When to use regular functions:** Inside objects when you need `this` to refer to the object.
**When to use arrow functions:** Everywhere else — callbacks, map, filter, reduce, utility functions.

**Interview:** What is the main difference between arrow functions and regular functions? → Arrow functions have shorter syntax and no own `this`. They borrow `this` from the surrounding context. They also can't be used as constructors.

---

# forEach

Loops through every item in an array and runs a function. Returns nothing (`undefined`).

```js
students.forEach(student => {
  console.log(student.name);
});
```

Use forEach when you just want to **do something** with each item — log it, send it, save it — and don't need a new array back.

```js
// also has index as second param
students.forEach((student, index) => {
  console.log(index + 1, student.name);
});
```

**Use when:** Logging, sending data, side effects — when you don't need a return value.

**Don't use when:** You need a new transformed array (use `map`) or a filtered array (use `filter`).

---

# for...of

A cleaner loop for iterating over **array values** directly. No index, no `.length`, no `array[i]`.

```js
const items = ["a", "b", "c"];

for (let item of items) {
  console.log(item); // a, b, c
}
```

**Use when:** You need to loop through array items and don't need the index.

**Use regular for loop when:** You need the index for positioning, ranking, or conditional logic based on position.

---

# for...in

Loops over the **keys** of an object. Not for arrays.

```js
const person = { name: "Amit", age: 22, city: "Ahmedabad" };

for (let key in person) {
  console.log(key, person[key]);
  // name Amit
  // age 22
  // city Ahmedabad
}
```

- `key` is each property name
- `person[key]` gives you the value — same as `person.name` but dynamic

**Use for objects only.** Avoid on arrays — use `for...of` or `forEach` for arrays instead.

---

# Destructuring

A way to unpack values from arrays or objects into variables — in one clean line.

## Object Destructuring

```js
const person = { name: "Amit", age: 22, city: "Ahmedabad" };

// basic
const { name, age } = person;

// rename while destructuring
const { name: fullName } = person; // variable is now fullName

// default value — used if property doesn't exist
const { country = "India" } = person;

// rest — collect remaining into new object
const { name, ...rest } = person;
// rest = { age: 22, city: "Ahmedabad" }
```

## Array Destructuring

```js
const scores = [91, 85, 78, 92, 65];

// basic
const [first, second] = scores; // 91, 85

// skip items with empty comma
const [first, , third] = scores; // 91, 78

// rest — collect remaining into array
const [first, ...remaining] = scores;
// remaining = [85, 78, 92, 65]
```

**Use when:** Pulling specific values out of objects or arrays cleanly — especially useful with API responses and function returns.

**Interview:** What is destructuring? → A syntax to unpack values from arrays or objects into variables in a single line instead of multiple assignments.

---

# Spread Operator `...`

Unpacks an array or object into individual items.

```js
// merge arrays
const a = [1, 2, 3];
const b = [4, 5, 6];
const combined = [...a, ...b]; // [1, 2, 3, 4, 5, 6]

// merge objects
const person = { name: "Amit" };
const address = { city: "Ahmedabad" };
const full = { ...person, ...address };

// copy without mutating original
const updated = { ...person, name: "Raj" }; // person is unchanged
```

**Use when:** Merging arrays/objects, copying without mutation, passing array items as function arguments.

---

# Rest Operator `...`

Collects multiple individual items into an array. Same symbol as spread — opposite direction.

```js
// in function params — collect all arguments
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
sum(1, 2, 3, 4, 5); // numbers = [1, 2, 3, 4, 5]

// in destructuring — collect remaining
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// rest = [3, 4, 5]
```

**Key difference:**
- Spread → one thing becomes many (unpack)
- Rest → many things become one (collect)

**Interview:** What's the difference between spread and rest? → Same syntax, opposite purpose. Spread unpacks. Rest collects. Context tells you which — if it's in function params or left side of destructuring it's rest. If it's in a function call or right side it's spread.

---

# find and findIndex

Both search an array and **stop at the first match**.

## find
Returns the **first matching item**. Returns `undefined` if nothing matches.

```js
const student = students.find(s => s.marks > 90);
// returns the first student object with marks above 90
```

## findIndex
Returns the **index of the first match**. Returns `-1` if nothing matches.

```js
const index = students.findIndex(s => s.name === "Priya");
// returns 3
```

**find vs filter:**
- `find` → first match, returns the item
- `filter` → all matches, returns an array

**Use when:** Searching for a specific item by id, name, or any unique condition.

---

# some and every

Both check a condition and return `true` or `false`. Both stop early.

## some
Returns `true` if **at least one** item passes. Stops at first `true`.

```js
const hasTopper = students.some(s => s.marks > 90); // true
```

## every
Returns `true` only if **all** items pass. Stops at first `false`.

```js
const allPaid = students.every(s => s.paid); // false if even one hasn't paid
```

**Use cases:**
- `some` → "Is there at least one admin?", "Has anyone scored above 90?"
- `every` → "Have all payments been made?", "Are all fields filled?"

**Interview:** What is short-circuit evaluation in some/every? → some stops as soon as it finds a true. every stops as soon as it finds a false. They don't loop through the whole array unnecessarily.

---

# flat and flatMap

## flat
Flattens nested arrays into a single array.

```js
const nested = [1, [2, 3], [4, [5, 6]]];

nested.flat();         // [1, 2, 3, 4, [5, 6]] — one level
nested.flat(2);        // [1, 2, 3, 4, 5, 6]   — two levels
nested.flat(Infinity); // fully flattened — all levels
```

## flatMap
Maps first, then flattens one level. Cleaner than `.map().flat()`.

```js
const sentences = ["Hello World", "Good Morning"];
const words = sentences.flatMap(s => s.split(" "));
// ["Hello", "World", "Good", "Morning"]
// without flatMap you'd get [["Hello", "World"], ["Good", "Morning"]]
```

**Use when:** You have arrays inside arrays and want to work with a flat list.

---

# Common Interview Gotchas

1. **map always returns same length** — if you forget to return, you get `undefined` in that slot
2. **filter needs true/false** — returning an object works (truthy) but is bad practice
3. **reduce starting value** — always provide it, especially with objects
4. **+= inside map mutates original** — use `+` to calculate, don't assign back to original
5. **forEach returns undefined** — storing it in a variable gives you nothing useful
6. **var leaks out of blocks** — always use let/const
7. **Arrow functions and this** — no own `this`, avoid as object methods
8. **find stops at first match** — use filter if you need all matches
9. **for...in on arrays** — avoid it, it iterates inherited properties too
10. **Spread is shallow copy** — nested objects inside are still references, not deep copied
