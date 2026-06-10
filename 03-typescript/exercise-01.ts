// Exercise 1 — Annotate a function signature
// You have this JS function:

interface User {
  name: string;
  age: number;
}

function formatUser(user1: User): string {
  return `${user1.name} (${user1.age})`;
}

const user1: User = {
  name: "amit",
  age: 22,
};

formatUser(user1);

// Define an interface User and properly type this function — parameter and return type.

//------------------------------------------

// Exercise 2 — Union + optional
// Model a Notification object. It has:

// id — number, readonly
// message — string
// type — can only be "info", "warning", or "error" (use a literal union)
// dismissedAt — optional, string

// Write it as a type alias.

type AppNotification = {
  readonly id: number;
  message: string;
  type: "info" | "warning" | "error";
  dismissAt?: string;
};

//------------------------------------------

// Exercise 3 — Interface extension
// You have a base Animal interface with name and age. Create a Dog interface that extends it and adds breed (string) and isVaccinated (boolean).
// Then write a variable of type Dog and assign a valid value to it.

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  isVaccinated: boolean;
}

const dog: Dog = {
  name: "Lily",
  age: 7,
  breed: "Golden Retriver",
  isVaccinated: true,
};

//------------------------------------------

// Exercise 4 — Intersection type
// You have two types:

type HasTimestamps = { createdAt: string; updatedAt: string };
type HasId = { id: number };

// Create a BaseEntity type using intersection. Then create a Product type that is a BaseEntity plus name: string and price: number.

type BaseEntity = HasTimestamps & HasId;

type Product = BaseEntity & { name: string; price: number };

const product: Product = {
  id: 1,
  createdAt: "2AM",
  updatedAt: "5PM",
  name: "Phone",
  price: 999,
};

//------------------------------------------

// Exercise 5 — Index signature
// Model a ScoreBoard type — it maps player names (string) to their scores (number). Write a variable of that type with 3 players.

type ScoreBoard = { [key: string]: number };

const board: ScoreBoard = {
  amit: 120,
  rahul: 95,
};

//------------------------------------------

// Exercise 6 — Spot what's wrong
// What's the TypeScript error here, and why?

interface Config {
  readonly apiUrl: string;
  timeout: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 3000,
};

// config.apiUrl = "https://other.com";
config.timeout = 5000;
