<!DOCTYPE html>
<html>
<head>
  <title>Scroll Progress Bar</title>
  <style>
    /* Style for the progress bar */
    #progressBar {
      width: 100%;
      height: 5px;
      background-color: #f3f3f3;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
    }

    #progressBarFill {
      height: 100%;
      background-color: #007bff;
      width: 0;
    }
  </style>
</head>
<body>
  <h1>Scroll Progress Bar</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo mi nec suscipit. Donec vel augue neque.
    Nullam cursus ex augue, eu bibendum mauris vestibulum nec. Pellentesque interdum ex vitae purus iaculis
    aliquet. Sed tempus felis eget feugiat pellentesque. Quisque eget facilisis tellus, vel rhoncus purus.
    Morbi eu finibus quam. Curabitur cursus justo ut urna efficitur, in viverra metus laoreet. Sed vel metus
    blandit, posuere quam a, bibendum mi. Integer facilisis turpis quis eros consequat, eget consequat augue
    malesuada. Integer vitae efficitur urna.</p>

  <!-- Progress bar element -->
  <div id="progressBar">
    <div id="progressBarFill"></div>
  </div>

  <script>
    // Get DOM elements
    const progressBar = document.getElementById("progressBar");
    const progressBarFill = document.getElementById("progressBarFill");

    // Function to update progress bar based on scroll position
    const updateProgressBar = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      progressBarFill.style.width = `${scrollProgress}%`;
    };

    // Event listener for scroll event
    window.addEventListener("scroll", updateProgressBar);
  </script>
</body>
</html>
