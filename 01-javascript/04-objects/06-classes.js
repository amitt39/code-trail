// Build a BankAccount class with:

class BankAccount {
  // constructor takes owner and starting balance
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  // deposit(amount) — adds to balance, prints "depositd ₹500. New balance: ₹10500"
  deposit(amount) {
    this.balance += amount
    console.log(`depositd ₹${amount}. New balance: ₹${this.balance}`);
  }
  // withdraw(amount) — deducts from balance, prints the new balance. If insufficient — prints "Insufficient balance"
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ₹${amount}. New balance: ₹${this.balance}`);
    }
    else {
      console.log("Insufficient balance");
    }
  }
  // getBalance() — prints "Amit's balance: ₹10000"
  getBalance() {
    console.log(`${this.owner}'s balance: ₹${this.balance}`);
  }
}

// Create two bank accounts and test all methods on both.
const owner1 = new BankAccount("Amit", 5000);
const owner2 = new BankAccount("Anuj", 10000);

owner1.deposit(20000);
owner1.withdraw(5000);
owner1.getBalance();

owner2.deposit(1000);
owner2.withdraw(15000);
owner2.getBalance();
