// Function to double the quantity of each item in the cart
function doubleQuantityInCart(cart) {
    return cart.map(quantity => quantity * 2); // Use map to create a new array with doubled quantities
  }
  
  // Example usage
  const cart = [2, 3, 1, 5, 4]; // Array of quantities in the cart
  console.log("Before doubling:", cart); // Print the cart before doubling
  const doubledCart = doubleQuantityInCart(cart); // Call the function to double the quantity of each item in the cart
  console.log("After doubling:", doubledCart); // Print the cart after doubling
  