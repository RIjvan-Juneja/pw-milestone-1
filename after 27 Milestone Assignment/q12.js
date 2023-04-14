// Function to calculate rental cost
function calculateRentalCost(daysRented, carType) {
    let rentalCost; // Variable to store the calculated rental cost
    
    // Check the car type and calculate the rental cost accordingly
    switch (carType.toLowerCase()) {
      case 'economy':
        rentalCost = 4000;
        break;
      case 'midsize':
        rentalCost = 10000;
        break;
      case 'luxury':
        rentalCost = 20000;
        break;
      default:
        // If car type is not valid, return an error message
        return 'Invalid car type';
    }
  
    // Calculate the total rental cost by multiplying the rental cost with the number of days rented
    return rentalCost * daysRented;
  }
  
  // Example usage
  const daysRented = 5; // Number of days rented
  const carType = 'midsize'; // Type of car
  const totalRentalCost = calculateRentalCost(daysRented, carType); // Call the function to calculate the total rental cost
  console.log(`Total rental cost for ${daysRented} days of ${carType} car: Rs. ${totalRentalCost}/-`); // Print the total rental cost
  