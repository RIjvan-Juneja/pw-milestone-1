// Define a Cart class to represent the shopping cart
class Cart {
    constructor() {
      this.items = []; // Initialize an empty array to store items in the cart
    }
  
    // Method to add an item to the cart
    addItem(item) {
      // Check if the item is already in the cart
      if (this.items.some(cartItem => cartItem.id === item.id)) {
        console.log("Item already exists in the cart.");
      } else {
        this.items.push(item); // Add the item to the cart if it's not a duplicate
        console.log("Item added to the cart successfully.");
      }
    }
  
    // Other methods for removing items, updating quantities, etc.
  }
  
  // Example usage
  class Item {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // Create a new cart
  const cart = new Cart();
  
  // Add items to the cart
  const item1 = new Item(1, "Product 1", 10);
  const item2 = new Item(2, "Product 2", 20);
  const item3 = new Item(3, "Product 3", 30);
  
  cart.addItem(item1); // Add item1 to the cart
  cart.addItem(item2); // Add item2 to the cart
  cart.addItem(item1); // Try to add item1 again (duplicate)
  cart.addItem(item3); // Add item3 to the cart
  