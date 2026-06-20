// Use this array:
const orders = [
  { product: "iPhone 17", price: 69000, delivered: true },
  { product: "Macbook Air", price: 90000, delivered: false },
  { product: "AirPods", price: 15000, delivered: true },
  { product: "iPad", price: 45000, delivered: false },
  { product: "Apple Watch", price: 32000, delivered: true },
];

// Do these tasks:

// Get only the delivered orders, then from those get just the product names
const deliveredOrder = orders.filter(order => {
  if (order.delivered) {
    return order.product; // or return true or anything which is truthy Cause if we just keep return it will treated as false so will get empty array
  }
}).map(order => order.product);

console.log(deliveredOrder);

// Get only undelivered orders, then from those get the prices with 18% GST added
const undelivered = orders.filter(order => !order.delivered).map(order => {
  return { product: order.product, price: order.price + order.price * .18, delivered: order.delivered };
});

console.log(undelivered);

// Get only delivered orders above ₹30000, then format them as "iPhone 17 - ₹69000 ✓"
const formatedStringFilterdPrice = orders.filter(order => order.delivered && order.price > 30000).map(order => {
  let strFormat = `${order.product} - ₹${order.price} ✓`
  return strFormat
})

console.log(formatedStringFilterdPrice);


// Each task is two steps — filter first, then map. Chain them together.
