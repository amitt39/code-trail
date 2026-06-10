const product = {
  name: "iPhone 17",
  price: 69000,
  brand: "Apple",
  storage: "256GB",
  inStock: true
};

// Do these tasks:

// Print all keys using Object.keys
console.log("---Keys---");

Object.keys(product).forEach(key => console.log(key))

// Print all values using Object.values
console.log("---Values---");
Object.values(product).forEach(value => console.log(value));

// Print each key-value pair like "name: iPhone 17" using Object.entries and destructuring
console.log("---Entries---");
Object.entries(product).forEach(([key, value]) => console.log(`${key}: ${value}`))

// Count how many properties the object has using Object.keys

// const totalObj = Object.keys(product).reduce((acc, curr) => {
//   return acc + 1
// }, 0)
// console.log(totalObj);

const totalObj = Object.keys(product).length
console.log(totalObj);


// Find all properties whose value is a string using Object.entries and filter
Object.entries(product).filter(([key, value]) => {
  return typeof value == "string"
}).forEach(([key, value]) => console.log(key))
