function mixColors(color1, color2) {
    var resultingColor;
  
    // Convert colors to lowercase for case-insensitive comparison
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();
  
    // Use switch statement to determine resulting color
    switch (color1) {
      case "red":
        switch (color2) {
          case "blue":
            resultingColor = "purple";
            break;
          case "yellow":
            resultingColor = "orange";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      case "blue":
        switch (color2) {
          case "yellow":
            resultingColor = "green";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      case "yellow":
        switch (color2) {
          case "red":
          case "blue":
            resultingColor = "green";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      default:
        resultingColor = "Invalid color combination";
        break;
    }
  
    console.log("Resulting color: " + resultingColor);
  }
  
  // Example usage
  var color1 = "red";
  var color2 = "blue";
  mixColors(color1, color2);
  