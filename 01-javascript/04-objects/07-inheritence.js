// Build a Vehicle class with:
class Vehicle {
  // constructor takes brand, model, speed

  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
  }

  // describe() — prints "Toyota Camry - top speed: 180km/h"
  describe() {
    console.log(`${this.brand} ${this.model} - top speed: ${this.speed}km/h`);
  }

  // accelerate(amount) — increases speed by amount, prints "Accelerating... speed is now 200km/h"
  accelerate(amount) {
    this.speed += amount;
    console.log(`Accelerating... speed is now ${this.speed}/h`);
  }

}

// Then build a Car class that extends Vehicle with:
class Car extends Vehicle {
  // constructor takes brand, model, speed, doors
  constructor(brand, model, speed, doors) {
    super(brand, model, speed)
    this.doors = doors;
  }


  // describe() — overrides parent, prints "Toyota Camry - 4 doors - top speed: 180km/h"
  describe() {
    console.log(`${this.brand} ${this.model} - ${this.doors} doors - top speed: ${this.speed}km/h`);
  }
}

// Then build an ElectricCar class that extends Car with:
class ElectricCar extends Car {
  // constructor takes brand, model, speed, doors, range
  constructor(brand, model, speed, doors, range) {
    super(brand, model, speed, doors)
    this.range = range;
  }

  // describe() — overrides, prints "Tesla Model S - 4 doors - range: 500km - top speed: 250km/h"
  describe() {
    console.log(`${this.brand} ${this.model} - ${this.doors} doors - range: ${this.range}km - top speed: ${this.speed}km/h`);
  }

}

// Create one instance of each and test all methods
const vehicle = new Vehicle("Toyota", "Camry", 180);
const car = new Car("Toyota", "Camry", 180, 4);
const electricCar = new ElectricCar("Tesla", "Model S", 250, 4, 500);

vehicle.describe()
vehicle.accelerate(50)
vehicle.describe()

car.describe()
car.accelerate(50)
car.describe()

electricCar.describe()
