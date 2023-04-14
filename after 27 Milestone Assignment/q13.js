// Function to calculate total bill and bill per person
function calculateBill(costPerDish, numberOfPeople) {
    // Check if the cost per dish and number of people are valid
    if (typeof costPerDish !== 'number' || typeof numberOfPeople !== 'number' || costPerDish <= 0 || numberOfPeople <= 0) {
      return 'Invalid input';
    }
  
    // Calculate the total bill by multiplying the cost per dish with the number of people
    const totalBill = costPerDish * numberOfPeople;
  
    // Calculate the bill per person by dividing the total bill by the number of people
    const billPerPerson = totalBill / numberOfPeople;
  
    // Return an object containing the total bill and bill per person
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }
  
  // Example usage
  const costPerDish = 150; // Cost per dish
  const numberOfPeople = 4; // Number of people
  const billInfo = calculateBill(costPerDish, numberOfPeople); // Call the function to calculate the total bill and bill per person
  console.log(`Total bill: Rs. ${billInfo.totalBill}/-`); // Print the total bill
  console.log(`Bill per person: Rs. ${billInfo.billPerPerson}/-`); // Print the bill per person
  