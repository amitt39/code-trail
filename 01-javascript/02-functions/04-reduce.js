// Use this array:
const orders = [
  { product: "iPhone 17", price: 69000, delivered: true },
  { product: "Macbook Air", price: 90000, delivered: false },
  { product: "AirPods", price: 15000, delivered: true },
  { product: "iPad", price: 45000, delivered: false },
  { product: "Apple Watch", price: 32000, delivered: true },
];
// Do these three tasks using reduce:

// Get the total price of all orders
const totalOrdersPrice = orders.map(order => order.price).reduce((acc, curr) => {
  return acc + curr
}, 0)
console.log(totalOrdersPrice);

// Get the total price of only delivered orders
const deliveredOrderPrice = orders.filter(order => order.delivered).map(order => order.price).reduce((acc, cur) => {
  return acc + cur;
}, 0)
console.log(deliveredOrderPrice);

// Count how many orders are undelivered
const undeliveredOrders = orders.filter(order => !order.delivered)
console.log(undeliveredOrders);

// const undeliveredOrderCount = undeliveredOrders.reduce((acc, curr) => {
//   return acc + 1;
// }, 0)

// console.log(undeliveredOrderCount);

const undeliveredOrderCount = undeliveredOrders.length
console.log(undeliveredOrderCount);
