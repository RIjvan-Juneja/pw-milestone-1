// Define a customer object with name and balance properties
const customer = {
    name: "John Doe",
    balance: 5000,
    
    // Method to deposit money into the customer's account
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit of Rs. ${amount} successful. Current balance: Rs. ${this.balance}`);
      } else {
        console.log("Invalid amount for deposit. Please enter a positive amount.");
      }
    },
    
    // Method to withdraw money from the customer's account
    withdraw: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal of Rs. ${amount} successful. Current balance: Rs. ${this.balance}`);
      } else {
        console.log("Insufficient balance or invalid amount for withdrawal.");
      }
    }
  };
  
  // Deposit some money into the customer's account
  customer.deposit(2000); // Output: Deposit of Rs. 2000 successful. Current balance: Rs. 7000
  
  // Withdraw some money from the customer's account
  customer.withdraw(3000); // Output: Withdrawal of Rs. 3000 successful. Current balance: Rs. 4000
  
  // Try to withdraw more money than the available balance
  customer.withdraw(5000); // Output: Insufficient balance or invalid amount for withdrawal.
  