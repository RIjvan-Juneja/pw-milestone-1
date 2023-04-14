// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // Formula to convert Celsius to Fahrenheit
  }
  
  // Example usage
  const celsiusTemperature = 25; // Celsius temperature to convert
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature); // Call the function to convert Celsius to Fahrenheit
  console.log(`${celsiusTemperature}°C is equivalent to ${fahrenheitTemperature}°F`); // Print the converted temperature
  