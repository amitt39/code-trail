const phone = {
  brand: "Apple",
  model: "iPhone 17",
  price: 69000,
  storage: "256GB",
};

// Access and print brand and price using dot notation
console.log(phone.brand);
console.log(phone.price);

// Access and print model using bracket notation
console.log(phone["model"]);

// Add a new property color with value "Black"
phone.color = "Black"
console.log(phone.color);

// Update price to 72000
phone.price = 72000;
console.log(phone.price);

// Delete storage
delete phone.storage;
console.log(phone);

// Add a method describe that prints "Apple iPhone 17 costs ₹72000"
phone.describe = function () {
  console.log(`${this.brand} ${this.model} costs ₹${this.price}`);

}
phone.describe()

// Print the final object
console.log(phone);
