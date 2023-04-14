function countVowels(name) {
    var vowels = "aeiouAEIOU"; // List of vowels
    var count = 0; // Initialize the count to 0
  
    // Iterate through each character in the name
    for (var i = 0; i < name.length; i++) {
      var char = name.charAt(i); // Get the character at the current position
  
      // Check if the character is a vowel
      if (vowels.indexOf(char) !== -1) {
        count++; // Increment the count if it's a vowel
      }
    }
  
    return count;
  }
  
  // Example usage
  var userName = "John Doe"; // User's name
  var vowelCount = countVowels(userName);
  console.log("Number of vowels in the name: " + vowelCount);
  