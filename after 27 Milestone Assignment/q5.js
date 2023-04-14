function capitalizeFirstLetter(name) {
    // Use ternary operator to check if the first letter is lowercase
    var capitalized = (name.charAt(0) === name.charAt(0).toLowerCase()) ? 
                        name.charAt(0).toUpperCase() + name.slice(1) : 
                        name;
    return capitalized;
  }
  
  // Example usage
  var userName = "john"; // User's name
  var capitalizedUserName = capitalizeFirstLetter(userName);
  console.log("Capitalized name: " + capitalizedUserName);
  