// Sample cart array with objects containing unit price and quantity
const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
    { unitPrice: 8, quantity: 1 }
  ];
  
  // Arrow function to calculate total cost of items in the cart
  const calculateTotalCost = cart => {
    // Using reduce() to sum up the total cost
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  };
  
  // Call the calculateTotalCost function with the cart array
  const totalCost = calculateTotalCost(cart);
  console.log(`Total cost: $${totalCost}`); // Print the total cost
  