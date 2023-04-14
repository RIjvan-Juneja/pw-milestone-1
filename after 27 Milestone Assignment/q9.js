// Function to print numbers divisible by 3 but not by 2
function printNumbersDivisibleBy3ButNotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) { // Loop through each element in the array
      const num = numbers[i]; // Get the current number
      if (num % 3 === 0 && num % 2 !== 0) { // Check if the number is divisible by 3 but not by 2
        console.log(num); // Print the number
      } else {
        continue; // Skip to the next iteration if the condition is not met
      }
    }
  }
  
  // Example usage
  const numbers = [9, 4, 6, 3, 12, 7, 18, 5]; // Array of numbers
  printNumbersDivisibleBy3ButNotBy2(numbers); // Call the function with the input array `numbers`
  