<!DOCTYPE html>
<html>
<head>
  <title>Color Changing Button</title>
  <style>
    /* Style for the button */
    #colorButton {
      padding: 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Color Changing Button</h1>
  <p>Click the button below to change the background color of the page!</p>

  <!-- Color changing button element -->
  <button id="colorButton">Change Color</button>

  <script>
    // Array of colors
    const colors = ["#007bff", "#dc3545", "#ffc107", "#28a745", "#f8f9fa", "#343a40"];

    // Function to generate a random color from the colors array
    const getRandomColor = () => {
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Get DOM element
    const colorButton = document.getElementById("colorButton");

    // Event listener for button click event
    colorButton.addEventListener("click", () => {
      // Get a random color
      const randomColor = getRandomColor();
      // Set the background color of the body to the random color
      document.body.style.backgroundColor = randomColor;
    });
  </script>
</body>
</html>
