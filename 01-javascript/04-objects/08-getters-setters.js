// Build a BankAccount class with:
class BankAccount {
  // constructor takes owner and _balance
  constructor(owner, _balance) {
    this.owner = owner;
    this._balance = _balance;
  }

  // getter balance — returns _balance
  get balance() {
    return this._balance;
  }

  // setter balance — if value is negative print "Balance cannot be negative" and don't update. Otherwise update _balance
  set balance(value) {
    if (value < 0) {
      console.log(`Balance cannot be negative`);
      return;
    }
    this._balance = value;
  }

  // deposit(amount) — uses the setter to update balance, prints "Deposited ₹500"
  deposit(amount) {
    this.balance += amount
    console.log(`Deposited ₹${amount}`);
  }

  // withdraw(amount) — if amount exceeds balance print "Insufficient balance". Otherwise uses setter to update, prints "Withdrawn ₹500"
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance");
      return
    }
    this.balance -= amount
    console.log(`Withdrawn ₹${amount}`);
  }

}


const account = new BankAccount("Amit", 10000);
account.deposit(5000);
account.withdraw(3000);
account.withdraw(20000);
account.balance = -500;
console.log(account.balance);
