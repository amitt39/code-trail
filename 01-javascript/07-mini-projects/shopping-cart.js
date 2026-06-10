// Shopping Cart

// Can add an item with a name and price
// Can remove an item by name
// Can show all items in the cart
// Can show the total price

function shoppingCart() {
  let cart = []

  return function (operation) {

    switch (operation) {
      case "Add Item":
        return function (name, price) {
          cart.push({ name, price })
          return cart
        }
      case "Remove Item":
        return function (name) {
          const itemIndex = cart.findIndex(item => item.name === name);
          cart.splice(itemIndex, 1)
          return cart
        }
      case "Show Cart":
        return function () {
          return cart
        }
      case "Total Price":
        return function () {
          let total = 0;
          for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
          }
          console.log(total);

        }

      default: "Invalid Choice"
        break;
    }
  }
}

const cart = shoppingCart();
let addItem = cart("Add Item")
let removeItem = cart("Remove Item")
let showCart = cart("Show Cart");
let totalPrice = cart("Total Price");

addItem("iPhone 17", 69000)
addItem("Macbook Air M4", 90000)

console.log("Cart Items: ", showCart());

removeItem("iPhone 17");

console.log();
console.log("After Removing an Item");
console.log("Cart Items: ", showCart());

totalPrice()
