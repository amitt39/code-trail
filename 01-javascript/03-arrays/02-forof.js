const cart = [
  { product: "iPhone 17", price: 69000, quantity: 1 },
  { product: "AirPods", price: 15000, quantity: 2 },
  { product: "iPad", price: 45000, quantity: 1 },
  { product: "Apple Watch", price: 32000, quantity: 3 },
];

// Do these three tasks using for...of:

// Print each product name and its total price (price × quantity)
for (const item of cart) {
  console.log(`${item.product} - ${item.price * item.quantity}`);
}
// Print only items where total price is above 50000
for (const item of cart) {
  if ((item.price * item.quantity) > 50000) {
    console.log(item.product);
  }
}
// Calculate and print the grand total of the entire cart
let total = 0
for (const item of cart) {
  total += (item.price * item.quantity)
}
console.log(total);
