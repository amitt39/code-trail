// Build a vehiclePrototype object with these methods:
// describe — prints "Toyota Camry runs on Petrol"
// honk — prints "Beep Beep!"
const vehiclePrototype = {
  describe: function () {
    console.log(`${this.brand} ${this.model} runs on ${this.fuel} `);
  },
  honk: function () {
    console.log("Beep Beep!");
  }
}

// Then create two vehicles using Object.create(vehiclePrototype):
// // vehicle 1
const vehicle1 = Object.create(vehiclePrototype);
vehicle1.brand = "Toyota"
vehicle1.model = "Camry"
vehicle1.fuel = "Petrol"

// // vehicle 2
const vehicle2 = Object.create(vehiclePrototype)
vehicle2.brand = "Honda"
vehicle2.model = "Civic"
vehicle2.fuel = "Diesel"
// Call both methods on both vehicles.

vehicle1.describe()
vehicle1.honk()

vehicle2.describe()
vehicle2.honk()
