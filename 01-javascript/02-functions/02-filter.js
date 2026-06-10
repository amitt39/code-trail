// Use the same products array:
const products = [
  { name: "iPhone 17", price: 69000 },
  { name: "Macbook Air", price: 90000 },
  { name: "AirPods", price: 15000 },
  { name: "iPad", price: 45000 },
  { name: "Apple Watch", price: 32000 },
];

// Do these three tasks using filter:

// Get all products with price greater than 50000
const higherPrice = products.filter(product => {
  return product.price > 50000;
})

// Get all products with price less than 40000
const lowerPrice = products.filter(product => {
  return product.price < 40000;
})

// Get all products whose name contains the word "Air"
const containsWord = products.filter(product => {
  return product.name.includes("Air")
})
// Use console.log to print all three results.
console.log(higherPrice);
console.log(lowerPrice);
console.log(containsWord);
