// Your exercise:
// Write a class BankAccount with:

// owner — string, public
// balance — number, private
// A constructor that takes both
// A deposit(amount: number) method that adds to balance
// A getBalance() method that returns the current balance

class BankAccount {
  // public owner: string;
  // private balance: number;

  // constructor(owner: string, balance: number) {
  //   this.owner = owner;
  //   this.balance = balance;
  // }

  constructor(
    public owner: string,
    private balance: number,
  ) {
    this.owner = owner;
    this.balance = balance;
  }

  deposite(amount: number): void {
    this.balance = this.balance + amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// Write an abstract class Animal with:

// An abstract method makeSound() that returns a string
// A regular method describe() that returns "I am a {name} and I say {this.makeSound()}"
// A name property set via constructor shorthand

// Then write two classes Dog and Cat that extend it and implement makeSound.

abstract class Animal {
  abstract makeSound(): string;

  constructor(public name: string) {}

  describe() {
    return `I am a ${this.name} and I say ${this.makeSound()}`;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): string {
    return "dog_sound";
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): string {
    return "cat_sound";
  }
}

// Exercise 1:
// Write a function repeat that takes a value of type string and a times number with a default of 3. It returns a string with the value repeated that many times separated by a space.
// Example: repeat("hey", 2) → "hey hey"

function repeateStr(value: string, times: number = 3): string {
  return Array(times).fill(value).join(" ");
}
console.log(repeateStr("hey", 9));

// Exercise 2:
// Write a class Stack that works with numbers only for now (generics come in Phase 5).
// It should have:

// A private items array of numbers
// A push(item: number) method that adds to the stack
// A pop() method that removes and returns the last item, or undefined if empty
// A peek() method that returns the last item without removing it, or undefined if empty
// A size() method that returns the count

class Stack {
  private itmes: number[] = [];

  push(item: number) {
    this.itmes.push(item);
  }
  pop() {
    if (this.itmes.length === 0) return undefined;
    let lastItem = this.itmes.pop();
    return lastItem;
  }
  peek() {
    if (this.itmes.length === 0) return undefined;
    let lastItem = this.itmes[this.itmes.length - 1];
    return lastItem;
  }
  size() {
    return this.itmes.length;
  }
}

// Exercise 3:
// Write a function parseInput with two overloads:

// If passed a string, it returns the string converted to a number using parseInt
// If passed a number, it returns the number converted to a string using .toString()

// So it flips the type — string in, number out. Number in, string out.

function parseInput(value: string): number;
function parseInput(value: number): string;

function parseInput(value: string | number): number | string {
  if (typeof value === "string") {
    return parseInt(value);
  } else {
    return value.toString();
  }
}
