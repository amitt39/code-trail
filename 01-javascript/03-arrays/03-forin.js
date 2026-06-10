const phone = {
  brand: "Apple",
  model: "iPhone 17",
  price: 69000,
  color: "Black",
  storage: "256GB"
};
// Do these three tasks using for...in:

// Print every key and value like "brand: Apple"
for (const key in phone) {
  console.log(`${key}: ${phone[key]}`);
}
// Print only keys whose value is a number
for (const key in phone) {
  if (!isNaN(phone[key])) {
    console.log(key);
  }
}
// Count how many properties the object has

let properties = 0
for (const key in phone) {
  properties++;
}
console.log(properties);
