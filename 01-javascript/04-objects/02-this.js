const bankAccount = {
  owner: "Amit",
  balance: 10000,
  // add methods below
};

// Add these methods:

// deposit(amount) — adds amount to balance, prints "Deposited ₹500. New balance: ₹10500"
bankAccount.deposit = function (amount) {
  this.balance += amount;
  console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);

  return this;
}
// withdraw(amount) — deducts amount, prints "Withdrawn ₹2000. New balance: ₹8500". If balance is insufficient print "Insufficient balance"
bankAccount.withdraw = function (amount) {
  if (this.balance >= amount) {
    this.balance -= amount;
    console.log(`Withdrawn ₹${amount}. New balance ₹${this.balance} `);
    return this
  }
  else {
    console.log("Insufficient balance");
    return this
  }

}
// getBalance() — prints "Amit's balance: ₹10000"
bankAccount.getBalance = function () {
  console.log(`${this.owner}'s balance: ₹${this.balance}`);
  return this

}
// All methods should return this for chaining

// Test it with chaining:
bankAccount.deposit(5000).withdraw(2000).getBalance();
