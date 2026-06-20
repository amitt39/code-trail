// Exercise 1 — API Response wrapper
// Model a generic-ish response shape using only what you know (no generics yet). You have two possible API responses:

// Success: has status: "success", data which is an object with userId: number and email: string
// Error: has status: "error", message: string, code: number

// Create a single ApiResponse type that can be either. Then write one variable of each kind.

type ResponseSuccess = {
  userId: number;
  email: string;
  status: "success";
};

type ResponseError = {
  message: string;
  code: number;
  status: "error";
};

type ApiResponse = ResponseSuccess | ResponseError;

const response1: ApiResponse = {
  userId: 1,
  email: "abc@gmail.com",
  status: "success",
};

const response2: ApiResponse = {
  message: "Try again",
  code: 500,
  status: "error",
};

// Exercise 2 — Extend and restrict
// You have a Vehicle interface with make, model, year (all obvious types). Create an ElectricVehicle interface that extends it and adds batteryRange (number) and chargerType which can only be "Type1" | "Type2" | "CCS". All properties on ElectricVehicle should be readonly.

interface Vehicle {
  make: string;
  model: string;
  year: number;
}

interface ElectricVehicle extends Readonly<Vehicle> {
  batteryRange: number;
  chargerType: "Type1" | "Type2" | "CCS";
}

// Exercise 3 — Nested interface
// Model a BlogPost with these fields:

// id — readonly number
// title — string
// author — an object with name and email (define this as a separate Author interface)
// tags — array of strings
// metadata — object with views: number and likes: number

// Write a valid variable of type BlogPost.

interface Author {
  name: string;
  email: string;
}

type BlogPost = {
  readonly id: number;
  title: string;
  tags: string[];
  metadata: {
    views: number;
    likes: number;
  };
  author: Author;
};

const blogPost: BlogPost = {
  id: 1,
  title: "BOOK_TITLE",
  tags: ["inspirational", "motivation", "hard work"],
  metadata: {
    views: 10000,
    likes: 5000,
  },
  author: {
    name: "AUTHOR_NAME",
    email: "abc@xyz.com",
  },
};

// Exercise 4 — Union narrowing with types
// Create a Shape type that is either:

// { kind: "circle", radius: number }
// { kind: "rectangle", width: number, height: number }

// Then write a function getArea that takes a Shape and returns the correct area based on kind. Return type should be number.
// (This uses an if check on kind — no generics or guards needed, just plain logic.)

// type Shape = "circle" | "rectangle";

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return shape.radius * shape.radius * 3.14;
  } else if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else {
    return 0;
  }
}

// Exercise 5 — Intersection with conflict spotting
// What happens when you intersect two types that have the same key but different value types?
type A = { id: string };
type B = { id: number };
type C = A & B;
// Don't run it yet — first write down what you think C.id will be. Then create a variable of type C and try to assign something to id. What does TypeScript say? Explain why.

// C.id will act as union now, it will expect both string and number.

// const var1: C = {
//   id: "abc",
// };
// const var2: C = {
//   id: 5,
// };

// Model this data:
// You have an API response for a user profile. It has:

// id — can't be changed after creation
// name and email — required
// bio — optional
// role — can only be "admin", "editor", or "viewer"
// address — an object with city and country
// metadata — a flexible key-value store where keys are strings and values are strings

// Write this as an interface. Then write a second interface AdminUser that extends it and adds a permissions array of strings.

interface ApiResponse2 {
  readonly id: number;
  name: string;
  email: string;
  bio?: string;
  role: "admin" | "editor" | "viewer";
  address: {
    city: string;
    country: string;
  };
  metadata: { [key: string]: string };
}

interface AdminUser extends ApiResponse2 {
  permissions: Array<string>;
}
