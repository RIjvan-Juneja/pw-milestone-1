<!DOCTYPE html>
<html>
<head>
  <title>Highlight Long Words</title>
  <style>
    /* Style for highlighted words */
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <h1>Highlight Long Words</h1>
  <p id="myParagraph">This is a paragraph with some words that are longer than 8 characters. Words like 'paragraph', 'characters', and 'highlighted' should be highlighted with a yellow background color.</p>

  <script>
    // Get the paragraph element
    const myParagraph = document.getElementById("myParagraph");

    // Get the text content of the paragraph
    const paragraphText = myParagraph.textContent;

    // Split the text into an array of words
    const words = paragraphText.split(" ");

    // Loop through each word
    for (let i = 0; i < words.length; i++) {
      // Get the current word
      const word = words[i];

      // Check if the word is greater than 8 characters
      if (word.length > 8) {
        // Create a span element for the highlighted word
        const span = document.createElement("span");
        // Set the class name to "highlight"
        span.className = "highlight";
        // Set the innerHTML to the word
        span.innerHTML = word;

        // Replace the word in the paragraph with the highlighted word
        myParagraph.innerHTML = myParagraph.innerHTML.replace(word, span.outerHTML);
      }
    }
  </script>
</body>
</html>
