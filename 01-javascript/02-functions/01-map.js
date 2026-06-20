// You have this array:

const products = [
  { name: "iPhone 17", price: 69000 },
  { name: "Macbook Air", price: 90000 },
  { name: "AirPods", price: 15000 },
];

// Do these three tasks using map:

// Create a new array of just the product names
const productsArr = products.map(function (product) {
  return product.name;
})

// Create a new array of prices with 18% GST added
const priceWithGST = products.map(function (product) {
  return product.price + product.price * .18;
})

// Create a new array of strings like "iPhone 17 costs ₹69000"
const formatedProductDetails = products.map(function (product) {
  let formatedString = `${product.name} costs ₹${product.price}`
  return formatedString;
})


// Use console.log to print all three results.
console.log(productsArr);
console.log(priceWithGST);
console.log(formatedProductDetails);
console.log(products);
