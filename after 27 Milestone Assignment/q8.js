// Function to print inverted right-angled triangle pattern of asterisks
function printInvertedRightAngleTriangle(i) {
    for (let row = i; row >= 1; row--) { // Loop through each row
      let stars = ''; // Variable to store the asterisks for the current row
      for (let col = 1; col <= row; col++) { // Loop through each column in the row
        stars += '*'; // Add an asterisk to the current row
      }
      console.log(stars); // Print the row
    }
  }
  
  // Example usage
  const rows = 4; // Number of rows in the inverted right-angled triangle
  printInvertedRightAngleTriangle(rows); // Call the function with the input `rows`
  